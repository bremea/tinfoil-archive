# Tinfoil Docs

Tinfoil is a small and lightweight wrapper for Discord's REST and Gateway API, written in Typescript and designed with scalability in mind.
It leaves a lot of stuff up to the user, allowing for more fine-tuned control over how your bot interacts with the API.

Tinfoil closely mirrors Discord's actual API, thus, you should refer to [their docs]() in addition to these docs. 
Tinfoil does not offer objects or classes that represent common API types. Instead, all responses from Tinfoil will be JSON objects taken straight from the API response.