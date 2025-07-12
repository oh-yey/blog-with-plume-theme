package main

import (
	"bytes"
	"encoding/json"
	"encoding/xml"
	"fmt"
	"log"
	"net/http"
	"os"
)

type Sitemap struct {
	URLs []URL `xml:"url"`
}

type URL struct {
	Loc        string `xml:"loc"`
	ChangeFreq string `xml:"changefreq"`
	LastMod    string `xml:"lastmod,omitempty"`
}

func main() {
	urls := sitemap()
	fmt.Println(urls)
	// 主动提交bing
	bing(urls)
}

func sitemap() []string {
	// read sitemap.xml file
	file, err := os.Open("docs/.vuepress/dist/sitemap.xml")
	if err != nil {
		panic(err)
	}
	defer file.Close()
	// parse sitemap.xml
	urls, err := parseSitemap(file)
	if err != nil {
		panic(err)
	}
	return urls
}

func parseSitemap(file *os.File) ([]string, error) {
	var sitemap Sitemap
	decoder := xml.NewDecoder(file)
	err := decoder.Decode(&sitemap)
	if err != nil {
		return nil, err
	}

	var urls []string
	for _, url := range sitemap.URLs {
		if url.Loc == "https://www.jhdev.cn/" {
			continue
		}
		urls = append(urls, url.Loc)
	}

	return urls, nil
}

func bing(urls []string) {
	payloadData := map[string]interface{}{
		"host":        "www.jhdev.cn",
		"key":         "ed87e10f82b047adbadfcb59688cd55d",
		"keyLocation": "https://www.jhdev.cn/ed87e10f82b047adbadfcb59688cd55d.txt",
		"urlList":     urls,
	}

	payloadBytes, err := json.Marshal(payloadData)
	if err != nil {
		log.Printf("Error marshalling payload: %v", err)
		return
	}

	client := &http.Client{}
	req, err := http.NewRequest("POST", "https://www.bing.com/indexNow", bytes.NewReader(payloadBytes))
	if err != nil {
		log.Printf("Error creating request: %v", err)
		return
	}
	req.Header.Add("Content-Type", "application/json")

	res, err := client.Do(req)
	if err != nil {
		log.Printf("Error making request: %v", err)
		return
	}
	defer res.Body.Close()

	if res.StatusCode != http.StatusOK {
		log.Printf("Non-OK HTTP status: %s", res.Status)
	}

	fmt.Println(urls)
}
