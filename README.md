## deps 

[vitepress](https://github.com/vuejs/vitepress) and [cloudflare pages](https://pages.cloudflare.com/).

## URL  
[gc-survival-handbook](https://gc-survival-handbook.pages.dev/).

## How to use
1. create a .md file and fill it with desired content. e.g. /life.md

2. in `/.vitepress/config.mts`  
append `{ text: <name>, link: '<the relative path but without suffix. e.g. /life>' }` to 
```
sidebar: [
      {
        text: '内容',
        items: [
          xxxx
          <here>
        ]
      }
    ],
```
or create another element in sidebar list.   

same for the `nav` field.  

3. if you want to add access for this md in the Home page:  
In `index.md`,  
append `- theme: alt(refer to vitepress doc for more themes)
      text: 生活
      link: /life` to

```
actions:
    xxx
    <here>
```

4. push to `master` and the website will be automatically updated.