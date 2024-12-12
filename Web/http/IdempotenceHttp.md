###### Idempotence
Execute the same operation multiple times, the result is same as if applied once!

An API execution of multiple times, should return the same res! 
```
PUT \123\like
```

- No. of user likes coutn should get increased by 1 on multiple requests to the same API

```
PUT \pay\B\20000
```
pay user 'B' from 'A', retries shouldn't debit 20000 multiple times.


why retry?
- payment gateway failed
- request timeout


- you don't need idempotence if we don't retry.


Implementation
- PG generates an ID
- PService stores the ID and send it back to user
- user/app requests pay transfer with the ID