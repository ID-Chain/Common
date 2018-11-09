---
home: true
heroImage: /square-logo300x300.png
actionText: More info →
actionLink: /
description: EIT Digital - Self Sovereign Identity Project 
footer: IdentityChain - 2018
---

# Hello World :smile:

@startuml
strict digraph meme {
  exists [color=blue]
  authenticate [color=blue]
  require
  create
  UserCreated
  destroy
  UserDestroyed
  get [color=blue]
  authenticate -> require
  create -> UserCreated
  destroy -> require
  destroy -> UserDestroyed
  get -> require
}
@enduml

```javascript
console.log()
```
<swagger src="https://petstore.swagger.io/v2/swagger.json"/>