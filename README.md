
# GitHub Mockup Website

Mock GitHub issue page from Front-End design to product

## About GitHub Mockup
 
 ☑️ User can login and choose a repository
 
 ☑️ User can create / delete / edit comments, issues, and labels

 ☑️ User can search / filter issues, labels and assignees

- Developed with **TypeScript**, **React**, **React Router v6**, **Tailwind** and **Styled Components** for **RWD layout**, and **CSS animation**.
- Used **Supabase** to resolve **OAuth login**
- Used **Context** and **useReducer** to handle state management (User registration and login state management)
- Used **Firebase** to **deploy website** and hosted App on Firebase server
- Connected to GitHub API to **GET/PATCH/DELETE/POST** user data by **Octokit** and researched official documents
- Built **reusable code** and **UI components** for future use and displayed on **Storybook**
- Supported **Markdown** in textarea by using **Marked** and **Textarea-Markdown-Editor** 
- Supported **pagination** when issues are created over than 10 records
- Supported **Responsive Web Design** to adjust for different screen sizes and viewports automatically


### Project Structure

![Logo]()

### Router Structure

![Logo]()

### Flow Chart

![Logo]()

### Component Structure

![Logo]()


### Develop Tools

- React
- TypeScript
- React Router v6
- Taiwind CSS
- Styled Components
- Supabase
- Octokit
- Storybook
- Firebase
- Marked
- Textarea-Markdown-Editor


## Demo 🌟
 #### Login Page
- After login, user can choose a repository and show issues
- Selected repository and user name will show on http url
 
![f5qrx-p5o52](https://user-images.githubusercontent.com/105163825/199945698-6dfc3696-62aa-4cc6-9bf8-c2a2b27e23ca.gif)

 #### Label Page
- User can create / edit / delete a label
- User can choose random color or select color from colorboard
 
![bizso-j547d](https://user-images.githubusercontent.com/105163825/199945759-6bfdf2bb-3f95-4ea3-9235-cb73f285ebf5.gif)

 #### IssueList Page
- User can filter and search issues 
- User can click dropdown list to mutiple search 
- User can clear all search params 
- All dropdown list support keywords search  
- If there is 0 records to display that will show no result page 
- Supported pagination when issues are created over than 10 records
 
![App Screenshot](https://img.onl/MrpANz)

 #### NewIssue Page
- User can create a new issue 
- User can assign collaborator or assign yourself
- User can add or delete a label from sidebar
- Supported Markdown in textarea with Marked and Texarea-Markdown-Editor
 
![1aif0-reesz](https://user-images.githubusercontent.com/105163825/199945842-5a06046b-ba97-427e-8fb0-d851901f4a56.gif)


