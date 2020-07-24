export const projects = [
  {
    id: 0,
    name: "not-your-maid",
    title: "Not Your Maid",
    highlight: true,
    icon: "maid-icon.png",
    tags: [
      "figma",
      "mobile",
      "ux",
      "ui",
      "user testing",
      "invision",
      "illustrator",
      "prototyping",
    ],
    description:
      "Not Your Maid intends to simplify organization and management by providing a platform where users can divide household labor and improve household communication. Users of Not Your Maid will be able to clearly communicate to ensure housemates receive recognition for their work, are willing to perform tasks, and are aware of deadlines. The ultimate goal of this project is to explore potential ways to increase the completion of assigned tasks by their expected deadlines and reduce potential labour based tensions in a household.",
    components: [
      {
        type: "row",
        title: "Overview",
        details: [
          "Not Your Maid intends to simplify organization and management by providing a platform where users can divide household labor and improve household communication. Users of Not Your Maid will be able to clearly communicate to ensure housemates receive recognition for their work, are willing to perform tasks, and are aware of deadlines. The ultimate goal of this project is to explore potential ways to increase the completion of assigned tasks by their expected deadlines and reduce potential labour based tensions in a household.",
        ],
        subdetails: [],
        images: ["maid-icon.png"],
      },
      {
        type: "column",
        title: "Identifying the User",
        details: [
          "One of the first steps in Planning Not Your Maid was doing initial research on the potential user to better understand their wants and needs. About thirty percent of the population resides in shared household accommodation and this number only increases if you include families or couples. One of the most common locations to find individuals who cohabitate are colleges so the campus of Rochester Institute of Technology would provide easy access to the target demographic and their personal stories about cohabitation.",
          "The stories highlighted the way tension in a household can be caused by individuals having differing opinions on the importance of tasks, the time sensitivity of tasks, the manner in which they should be completed, and the assignment of them. The personas that were then developed based on these stories worked toward highlighting the pain points the user may face when utilizing Not Your Maid.",
        ],
        subdetails: [],
        images: [
          "notyourmaid_persona3.jpg",
          "notyourmaid_persona4.jpg",
          "notyourmaid_persona1.jpg",
          "notyourmaid_persona2.jpg",
        ],
      },
      {
        type: "column",
        title: "Contemplating Features",
        details: [""],
        subdetails: [
          {
            title: "Task List",
            details:
              "List which allows users to create new tasks for themselves or their roommates. Users will be able to selectively identify deadlines to accommodate for different organization styles. Users will also be able to add or view comments on issues which will show a history tracking any changes made to the task.",
          },
          {
            title: "Monthly Survey",
            details:
              "A dislike for confrontation was often the cause of rising tensions between housemates who were unhappy about certain aspects of their household organization but unwilling to confront their roommates. A monthly survey provided by the site will provide awareness to housemates ensuring they are happy and on the same page.",
          },
          {
            title: "Token Economy",
            details:
              "Users will be able to approve and recognize their housemates' efforts by providing ‘Kudos’, or ‘Hearts’ when a specific task is complete. This affirmation of their good behavior will help reinforce its continuation. Additionally, awards like ‘Deadline Streak’ can be maintained by successfully completing all tasks by their due date for weeks in a row.",
          },
          {
            title: "Historical Feed",
            details:
              "This section in the app will provide a historical feed of tasks completed. By organizing the tasks into charts, individuals can understand how evenly work is distributed and trends as to when tasks tend to be completed. The results of the Monthly survey will also be found here.",
          },
          {
            title: "Notifications",
            details:
              "Individuals state that they forget upcoming tasks, providing a notification when the deadline specified is approaching can ensure users are aware of upcoming tasks.",
          },
        ],
        images: ["notyourmaid_tasks.jpg"],
      },
      {
        type: "column",
        title: "Lo-fi Prototype",
        details: [
          "This low fidelity prototype highlights some of the primary pages that will be used in the application: alerts, profile, tasks, and history. The prototype focuses on developing an organization to features for the application and how best to display or accept user interactions.",
        ],
        subdetails: [],
        link:
          "https://www.figma.com/proto/8jy4YY3xB1HgidkPnG43BA/notyourmaid-Lo-Fi?node-id=14%3A470&scaling=min-zoom",
        images: [
          "notyourmaid_newtask.svg",
          "notyourmaid_calendar.svg",
          "notyourmaid_history.svg",
          "notyourmaid_complete.svg",
          "notyourmaid_accepttask.svg",
          "notyourmaid_profile.svg",
        ],
      },
      {
        type: "column",
        title: "Lo-fi User Testing",
        details: [
          "Due to restrictions from social distancing(COVID-19), there was a division in how the User Testing was completed rather than a uniform standard used for all participants. Tasks were either in person using a mobile device to navigate the Figma Prototype or on the web version with google hangouts for screen sharing observations.",
          "Participants were asked to complete a series of tasks and observed. After completing each task, they were asked to rate how difficult they found it from a 1 to 5 with 1 symbolizing little to no difficulty and a five symbolizing extreme difficulty. After participants completed a set of five tasks, they were asked some simple open ended questions to get broader suggestions for improvement.",
        ],
        subdetails: [
          {
            title: "Tasks Tested",
            list: [
              "You recieved a notification saying that a new task has been assigned to you. Use the 'not your maid' app to accept the task of cleaning out the left overs from the fridge.",
              "You just finished cleaning up the bedroom. Now you want to update your task on 'not your maid' to show that this task is complete.",
              "You just went by the kitchen and saw the trash was emptied. It looks like Amy completed her chore ahead of schedule! Use the 'not your maid' app to locate this finished task and provide Kudos/Heart/Likes to Amy.",
              "You are moving out of your current apartment and no longer want to be connected to your current household in 'not your maid'. Please use the app to leave your current household.",
              "You want to check what tasks are due on June 15h. Please use the 'not your maid' app to see what tasks are due by that date.",
            ],
          },
          {
            title: "Result Summary",
            details: [
              "Out of the five tasks which users were asked to complete, task four and five experienced the lowest difficulty rating which may suggest either that the task was most intuitive or that familiarity with the app decreased difficulty. In future testing, these tasks should be randomized to reduce the chance novelty and infamiliarity are the reason that earlier tasks are rated as more difficult. A consistent theme in comments for early tasks was confusion about information avaliable on the landing page(action required) as participants expected all tasks to be listed there during the second task. Another pain point was a difference in visual language for how to interact with tasks verses alert notifications. In the Follow-up Questions section of the testing, participants responded that they were hesistant to adopt this application to organize their chores because they felt that their household/roommates would be reluctant to use new technology. The most common suggestion for a future feature was the ability to add repetitive tasks to minimize the labour in creating a new one.",
            ],
          },
        ],
        images: [],
      },
      {
        type: "column",
        title: "Hi-fi Prototype",
        details: [
          "This prorotype improved upon the initial low-fedelity prototype with slight changes to the navigation. Additionally, the planned color scheme and some initial designs for the images and icons have been used. The videos shown are examples of the current navigation required to complete the listed tasks used for testing. Shadowing was added as well as color to help signify which objects are interactable.",
        ],
        subdetails: [],
        link: "https://invis.io/7GX1S23A2QH",
        images: [
          "notyourmaid_hifi_signup.svg",
          "notyourmaid_hifi_2.svg",
          "notyourmaid_hifi_3.svg",
          "notyourmaid_hifi_4.svg",
          "notyourmaid_hifi_5.svg",
          "notyourmaid_hifi_6.svg",
          "notyourmaid_hifi_7.svg",
          "notyourmaid_hifi_8.svg",
        ],
      },
    ],
  },
  {
    id: 1,
    name: "unburden",
    title: "unBurden",
    highlight: true,
    icon: "unburden-icon.png",
    tags: ["swift", "figma", "mobile", "ios", "ux", "ui", "firebase"],
    description:
      "unBurden hopes to help you simplify planning, packing and camping. A wonderful experience can be ruined by leaving an essential item behind. unBurden will help you plan what necessities to pack and keep track of which have been packed.",
    components: [
      {
        type: "row",
        title: "Overview",
        details: [
          "unBurden hopes to help you simplify planning, packing and camping. A wonderful experience can be ruined by leaving an essential item behind. unBurden will help you plan what necessities to pack and keep track of which have been packed.",
        ],
        subdetails: [],
        images: ["unburden-icon.png"],
      },
      {
        type: "column",
        title: "Key Features",
        details: [""],
        subdetails: [
          {
            title: "User Accounts",
            details:
              "Provide a Login/Signup page to ensure users have an account where they can access their personal trip data throughout sessions.",
          },
          {
            title: "Plan a Trip",
            details:
              "Users can fill out information for their upcoming camping trip for later reference. They also can add items to a list for packing and track what they have already packed.",
          },
          {
            title: "Shared Trips",
            details:
              "Multiple Users can view and edit data for a single trip. Individuals will be able to join a trip to share their information.",
          },
          {
            title: "Packing Suggestions",
            details:
              "Users will be provided with a list of suggested items to pack. They will be able to filter this list by categories like Hygiene or Tools.",
          },
          {
            title: "Plan Multiple Trips",
            details:
              "Users will be able to create more than one trip. They will be able to have more than one current plan and easily navigate between them.",
          },
        ],
        images: ["unburden_tasks.jpg"],
      },
      {
        type: "column",
        title: "Hi-fi Prototype",
        details: [
          "Prior to the Hi-Fidelity Prototype, Market Research was conducted on iOs applications which belonged to the categories of travel and task management. The Hi-Fi prototype focuses on developing the ideas of how to display packed and unpacked items.",
        ],
        subdetails: [],
        link: "https://invis.io/CRW3CH5G2UT",
        images: [
          "unburden_hifi_1.svg",
          "unburden_tabs.svg",
          "unburden_additem.svg",
        ],
      },
      {
        type: "column",
        title: "unBurden Code",
        details: [
          "The application for unBurden was made using xCode and Swift, thus native to iOs. With a goal of having multiple trips and shared trips, tracking state throughout the application would had to be planned into the inital designs and backend. The nested usage of navigation controls, tab controls, and story boards meant that this project was hefty to plan outright. In order to plan and try to understand how components would work together, I built out other smaller applications like a Note Taking App to understand how to handle more complex tasks.",
        ],
        subdetails: [],
        link: "https://github.com/cmp5987/unBurden",
        images: [],
      },
    ],
  },
];
