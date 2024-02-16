'use strict';

const mongoose = require('mongoose');

module.exports = [
    {
        id: mongoose.Types.ObjectId('5f76018c9b16166aaaaa0001'),
        role: ['Lead Full Stack Developer'],
        missions: [
            'Leading multiple Vue.js and Python projects',
            'Setting up new standards and processes',
            'Implementing new functionalities in Vue and Express',
            'Advise on technical choices and planning',
            'Improving the AWS architecture using Serverless',
            'Migrating all projects from Node 14 to Node 18',
            'Implementing functionalities on Raspberry in Python',
            'Migrating projects from Vue2 to Vue3',
            'Writing unit tests using Cypress',
            'Improving CI/CD using Gitlab',
            'Fixing issues related to ElasticSearch Shard/Alias, Keycloak, bugged features and Kubernetes',
            'Teaching others about some precise point in different technologies such as Vue, Elastic Search or Kuzzle'
        ],
        start_date: new Date('2023', '7'), // month index start at 0
        is_current: true,
        company: 'Uby',
        location: 'Paris, France',
        website: 'https://uby-group.com/'
    },
    {
        id: mongoose.Types.ObjectId('5f76018c9b16166aaaaa0002'),
        role: ['Full Stack Developer'],
        missions: [
            'Leading Nest.js B2B projects with a team of 5 developers utilizing Agile methodologies and Jira',
            'Setting new processes for the team and enforcing them using tools such as Sonar, Cypress, Husky',
            'Setting up code analysis with Sonar and Husky',
            'Building entire new Nest.js API in a NX monorepository',
            'Building new features for React Native application',
            'Implementing new functionalities in React/Angular, such as a notifications system for orders tracking',
            'Advise on technical choices and planning',
            'Training juniors with code reviews/pair programming',
            'Creating REST APIs with authentication, authorization, roles, connection to Sentry and Datadog using Nest.js',
            'Optimizing the performance of mongoDB queries',
            'Creating an entire guards system',
            'Documenting with OpenAPI and Storybook',
            'Writing unit tests using Jest and e2e using Cypress',
            'Organizing presentations of new tools to the team',
            'Rebuilding Python application as JavaScript application',
            'Fixing issues related to Nx architecture and k8s pods',
            'Helping others when they have blockers ',
            'Teaching others about how to use some tools or some precise point in React'
        ],
        start_date: new Date('2021', '8'), // month index start at 0
        end_date: new Date('2023', '7'), // month index start at 0
        company: 'Smood',
        location: 'Biot, France',
        website: 'https://www.smood.ch/fr'
    },
    {
        id: mongoose.Types.ObjectId('5f76018c9b16166aaaaa0003'),
        role: ['Back End Developer', 'Dev Ops', 'Scrum Master'],
        missions: [
            'Implementing algorithms such as MCTS, genetic algorithms and Dijkstra’s algorithm in Node.js',
            'Handling big data (datalake) coming from multiple sources',
            'Automating processes using Docker, Bitbucket, CI/CD Pipelines and Jenkins',
            'Documenting using OpenAPI and GraphQL Voyager',
            'Managing AWS architecture: EC2, ECS, RDS, Sage',
            'Facilitating the flow of information within the team',
            'Keeping the team on track by organizing logically the JIRA tickets, adding the missing information in the task, adding the priorities, the right tags',
            'Creating processes for deployment, CI/CD, how to document, how to open a ticket on Confluence',
            'Building multiple React applications',
            'Breaking the tasks of the product owner into smaller pieces for the development team',
            'Finding and clearing the blockers for the development team by searching/asking the information for completing the tickets',
            'Creating the Gantt Chart',
            'Leading the choices on technologies particularly on infrastructure side',
            'Checking the team is always on track using agile processes and by communicating as much as possible with the team',
            'Deploying containers in ECS and Fargate',
            'Setting SageMaker Studio for deploying our first model under Jupyter',
            'Implementing e2e tests using Cypress and Artillery',
            'Decoupling our applications using AWS SQS and AWS ALB',
            'Building REST API and GraphQL API using Restify, Express, Fastify and Apollo Server',
            'Improving security by creating three-tier architecture and changing the configuration of our subnets, VPS and Route table',
            'Creating the pipeline for CI/CD using bitbucket and AWS EC2',
            'Managing the RDS and aurora database',
            'Keeping the cost of AWS as low as possible and creating budget for following the spending',
            'Connecting our systems with external APIs such as Firebase, Google, MailGun, TypeForm',
            'Monitoring server by creating alarms and canaries for monitoring our infrastructure and servers',
            'Migrating database using DMS',
            'Using Route 53 to manage the traffic by creating routing policy',
            'Developing payement portal with 3 differents plan using Stripe',
            'Creating a role systems of 3 levels with people of different roles under the same companie',
            'Using Mailgun to manage the email of the applications',
            'Implementing micro services using Express, Nest.js',
            'Implementing new features on the actual product in Angular',
            'Advise teams on tools and feasibility of new features',
            'Teach junior developers new concepts and good practices',
            'Implementing new software using React, React Native and Restify',
            'Handle grooming, retrospective and estimation meetings',
            'Participate in meeting with clients',
            'Handle technical interview for recruitment'
        ],
        start_date: new Date('2018', '5'), // month index start at 0
        end_date: new Date('2023', '0'), // month index start at 0
        company: 'Nudgyt',
        location: 'Manila, Philippines',
        is_freelance: true,
        start_date_freelance: new Date('2021', '0'), // month index start at 0
        website: 'https://www.nudgyt.com/'
    },
    {
        id: mongoose.Types.ObjectId('5f76018c9b16166aaaaa0004'),
        role: ['Lead Full Stack Developer'],
        missions: [
            'Leading a team of 3 junior developers',
            'Planning the development cycle using agile methodologies',
            'Helping the team when blockers appears',
            'Fixing bugs arising on production',
            'Ratcheting the main application for reducing the complexity and improving the implementation',
            'Building new GraphQL queries and mutations in Apollo server',
            'Creating the CI/CD processes for the website and application',
            'Deploying new release to production',
            'Refactoring AWS lambda and improving the security by using the secret manager and environment variables',
            'Reducing cost of AWS by removing unnecessarily AWS lambda functions, S3 and by reducing the allocated compute power to some resources',
            'Upgrading the applications that was outdated for the last 4 years (from node 12 to node 18, prisma 1 to prisma 4...)',
            'Creating scripts for migrating the database',
            'Implementing new functionalities in React/D3.js such as adding commented pins on images similar to Figma',
            'Managing the architecture: Heroku, AWS, Netlify, Prisma, Cloudflare, Lambda, Serverless',
            'Improving the SEO (LCP and CLS) of a Next.js website'
        ],
        start_date: new Date('2020', '0'), // month index start at 0
        end_date: new Date('2023', '0'), // month index start at 0
        company: 'ManyPixels',
        is_remote: true,
        is_freelance: true,
        start_date_freelance: new Date('2021', '0'), // month index start at 0
        website: 'https://www.manypixels.co/'
    },
    {
        id: mongoose.Types.ObjectId('5f76018c9b16166aaaaa0005'),
        role: ['Full Stack Developer'],
        missions: [
            'Developing websites using WordPress, Symphony and a private PHP-based CMS following mockups',
            'Developing a REST API for a private newsletter system with Express',
            'Maintaining existing websites and Angular applications',
            'Leading projects with a team of 3 developers',
            'Developing React applications',
            'Advising on technical choices',
            'Documenting using OpenAPI',
            'Handling client meetings, requests and phone calls',
            'Planning project using Gantt Chart and ERD'
        ],
        start_date: new Date('2016', '9'), // month index start at 0
        end_date: new Date('2018', '5'), // month index start at 0
        company: 'ID Interactive',
        location: 'Vannes, France',
        website: 'https://www.id-interactive.fr/'
    },
    {
        id: mongoose.Types.ObjectId('5f76018c9b16166aaaaa0006'),
        role: ['Front End Developer', 'Internship'],
        missions: [
            'Building multilingual website using WordPress and Code Igniter',
            'Building website from scratch',
            'Handling meetings with clients',
            'Building paiement portal with multiple currencies',
            'Maintaining websites of client and adding new features such as comments section, new pages'
        ],
        start_date: new Date('2016', '2'), // month index start at 0
        end_date: new Date('2016', '9'), // month index start at 0
        company: 'SuperSogo Co. Ltd.',
        location: 'Bangkok, Thailand',
        website: 'https://supersogo.com/'
    }
];
