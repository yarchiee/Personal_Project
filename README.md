<div align=center>
<img src="https://user-images.githubusercontent.com/105163825/200102501-63189dba-7645-409b-935c-28227e861405.jpg"  width="20%"/>
</div>

# GitHub Mockup Website

☀️ **Mock [GitHub issue page](https://github-project-798b6.web.app/) from Front-End design to product** <br>
<div>
<img src="https://user-images.githubusercontent.com/105163825/200102169-b094711f-7607-4e1f-a584-630f60ede7fd.PNG"  width="50.5%"  />
 <img src="https://user-images.githubusercontent.com/105163825/200125062-bf949f5d-90b3-4472-853d-bfaa9ae0c8b7.PNG"  width="48.5%"/>
</div>

## About GitHub Mockup
 
 ☑️ User can **login** and **choose a repository**
 
 ☑️ User can **create / delete / edit** comments, issues, and labels

 ☑️ User can **search / filter** issues, labels and assignees

- Developed with **TypeScript**, **React**, **React Router v6**, **Tailwind** and **Styled Components** for **RWD layout**, and **CSS animation**.
- Used **Supabase** to resolve **OAuth login**
- Used **Context** and **useReducer** to handle state management ( User registration and login state management )
- Used **Firebase** to **deploy website** and hosted App on Firebase server
- Connected to GitHub API to **GET/PATCH/DELETE/POST** user data by **Octokit** and researched official documents
- Built **reusable code** and **UI components** for future use and displayed on **[Storybook](https://github-storybook.web.app/)**
- Supported **Markdown** in textarea by using **Marked** and **Textarea-Markdown-Editor** 
- Supported **pagination** when issues are created over than 10 records
- Supported **Responsive Web Design** to adjust for different screen sizes and viewports automatically

##
### Project Setting 📝
- **API files** store in **service document**
- **Utils files** store **reusable function** like **calculate time** and **calculate random color**
- **Context files** store **user registration data** and **login state management**
- **Components files** store **reusable code** and **UI components** like **header**, **footer** 

<img src="https://user-images.githubusercontent.com/105163825/200131264-9eca798f-f9d0-492e-9cd4-a35385997955.PNG" width="83%" />


### Router Setting 📝
- Used **React Router v6** that provides a declarative, **component-based** approach to routing and handles the common tasks of dealing with **URL params**, **redirects**, and **loading data** and provides one of the most intuitive APIs available and enables **lazy loading** and **SEO-friendly** **server-side rendering**
- Using **nested routes** and **Outlet** allows us to have **a route that contains other child routes**

<img src="https://user-images.githubusercontent.com/105163825/200130979-d27135e2-e2a0-4bf5-b9de-814dca80e211.PNG" width="83%"  />


### Component Setting 📝
- Built **reusable code** and **UI components** for future use and displayed on **[Storybook](https://github-storybook.web.app/)**
- Components like **header**, **footer**, **dropdown list**, **button**, and **input search**  
 
<img src="https://user-images.githubusercontent.com/105163825/200130802-b9cfe934-2f2e-4bde-81de-1fc260e9f890.PNG"   />
<img src="https://user-images.githubusercontent.com/105163825/200130841-ca19adee-8e61-4829-9f9e-b26e48c68d0c.PNG"  />


##
## Develop Tools 🔧

- React
- TypeScript
- React Router v6
- Tailwind CSS
- Styled Components
- Supabase
- Octokit
- Storybook
- Firebase
- Marked
- Textarea-Markdown-Editor


## Demo 🌟

#### Login Page ☁️
- After login, user can **choose a repository** and **show issues**
- **Selected repository** and **user name** will show **on http url**

![kekdh-yu44x](https://user-images.githubusercontent.com/105163825/200104305-258e7b36-3fc8-4605-bc0e-e6e88b9a4277.gif)

##
#### Label Page ☁️
- User can **create / edit / delete** a label
- User can choose **random color** or **select color from colorboard**
 
![bizso-j547d](https://user-images.githubusercontent.com/105163825/199945759-6bfdf2bb-3f95-4ea3-9235-cb73f285ebf5.gif)

##
#### IssueList Page ☁️
- User can **filter** and **search** issues 
- User can click dropdown list to **mutiple search** 
- User can **clear all search params** 
- All dropdown list **support keywords search**  
- If there is 0 records to display that will show **no result page** 
- Supported **pagination** when issues are created over than 10 records
 
![9nvtd-29eba](https://user-images.githubusercontent.com/105163825/200101443-138a72a9-05a6-414c-896b-9f4667e25d1b.gif)

##
#### NewIssue Page ☁️
- User can **create** a new issue 
- User can **assign collaborator** or **assign yourself**
- User can **add** or **delete** a label from sidebar
- Supported **Markdown** in textarea with **Marked** and **Texarea-Markdown-Editor**
 
![1aif0-reesz](https://user-images.githubusercontent.com/105163825/199945842-5a06046b-ba97-427e-8fb0-d851901f4a56.gif)

##
#### IssuePage ☁️
- User can **create / edit / delete** a comment 
- The comment box will **show defferent color** according to owner or collaborator

![k4lc5-5gpry](https://user-images.githubusercontent.com/105163825/200101108-93b324c1-0425-4df3-b95f-163ee339ef0d.gif)

##
#### RWD Layout ☁️
- Supported **Responsive Web Design** to adjust for different screen sizes and viewports automatically

<div>
<img src="https://user-images.githubusercontent.com/105163825/200127855-3be36043-84b4-4012-a963-3eb847101743.gif"  width="25%" />&nbsp; &nbsp; &nbsp;
<img src="https://user-images.githubusercontent.com/105163825/200128139-244a50c3-55a4-425c-a328-45ced7840a11.gif"  width="25%"  />&nbsp; &nbsp; &nbsp;
 <img src="https://user-images.githubusercontent.com/105163825/200128846-b49164b7-f2f2-4f0c-8b61-310a1b81dae9.gif"  width="25%"  />
</div>



## Future Feature 🔜
- Add timeline to record user event on issuepage
- Can select page on issuelist page

