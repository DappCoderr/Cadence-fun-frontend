---
Lesson 8 - Creating Storage
---

Now, let's put our knowledge of resources and dictionaries into action by storing Knights in our smart contract.To do this, we'll create a dictionary in the contract that stores Knights resource as value and ID as key.

```jsx
access(all) contract HelloWorld {

    // Declare a dictionary to store countries by their ID
    access(all) let storedCountries: @{UInt64: Country}

    // Declare a resource Country
    access(all) resource Country{}

    // Initialize the dictionary in the contract's initializer
    init() {
        self.storedCountries <- {}
    }
}
```

The storedCountries dictionary isn't a resource itself, but it stores resources (countries). Therefore, we treat it like a resource by using `<-` to initialize it in the contract's initializer.

Remember, when defining a resource type, the `@` symbol must be added.

### Put It to the Test

1. Open Flow [Playground](https://play.flow.com/)
2. Create a public dictionary named `storedKnight` of type resource and initialize its value in the `init` function.

Next, we’ll learn how to declare and use functions in Cadence.

### Solution !!

```jsx
access(all) contract KnightCreator {

  // New Code
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

	access(all) var totalSupply: UInt64

	init(){
		self.totalSupply = 0
    // Updated Code
    self.storeKnight <- {}
	}
}
```
