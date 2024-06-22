---
Lesson 9 - Function Declaration
---

Declaring a function involves specifying its visibility, function name, parameters, and return type (if any).

```jsx
// Define a function named setNewValue
access(all) fun setNewValue() {
    // Function body
}
```

### Put it to the Test

1. Open Flow [Playground](https://play.flow.com/)
2. Create a public function named `createKnight`.

Next, we’ll explore basic math operations in Cadence.

### Solution !!

```jsx
access(all) contract KnightCreator {

    access(all) var totalSupply: UInt64

    access(all) let storeKnight: @{UInt64:KnightNFT}

	access(all) struct KnightDetails{
		access(all) var name: String
		access(all) var power: UFix64

		init(){
			self.name = "Night King"
			self.power = 50.0
		}
	}

	access(all) resource KnightNFT{
		access(all) var id: UInt64
		access(all) var details: KnightDetails

		init(){
			self.id = 1
			self.details = KnightDetails()
		}
	}

    // New Code
    access(all) fun createKnight(){ }

	init(){
		self.totalSupply = 0
        self.storeKnight <- {}
	}
}
```
