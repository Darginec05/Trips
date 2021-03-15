## [Cleevio Trips App (click)](https://trips-theta.vercel.app/)
### Application for managing your trips:
* Create trip
* Delete trip
* See trip list
* Edit existing trip

# How to run this app locally?
Step by step:
1. Before run this app you need to create your token  [using this link](https://task-devel.cleevio-vercel.vercel.app/)
2. Create ```.env``` file and paste two vars: <br>```NEXT_PUBLIC_API_URI=https://task-devel.cleevio-vercel.vercel.app/api``` <br> ```NEXT_PUBLIC_API_TOKEN=<your token>```
3. ```yarn dev```- to run in development
4. ```yarn build```- to build app

----
# Tech stack

- Next JS - v10
- React Query - for query, mutation and cache managment
- Typescript - for type checking
- React-hook-form & Yup = for handling forms
- Styled-components - for managing styles
- Custom UI components