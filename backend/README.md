To run:
1) npm install
2) npm run build
3) npm run dev


Database connection details are in config.tsx file 


There are 4 sql tables.
--Company is for storing the details of a particular company
--Users is for storing user details ( username , password ..)
--Jobs is for storing jobs(open/closed both)
--JobApplications is for storing user submitted job details

----------------------------------------------------------------------------
———————————CREATE TABLE FOR USERS————————
CREATE TABLE `users`
(
  `userId`            INT(20) NOT NULL AUTO_INCREMENT PRIMARY KEY ,
  `username`            VARCHAR(20) NOT NULL ,
  `password`          VARCHAR(200) NOT NULL ,
  `firstName`   VARCHAR(20) NOT NULL ,
   `lastName` VARCHAR(20),
     `monthsOfExperience` INT(20),
  `noticePeriod`   VARCHAR(20) NOT NULL ,
  `location`   VARCHAR(20) NOT NULL ,
  `skills`   VARCHAR(20) NOT NULL ,
`resume` VARCHAR(2000) NOT NULL,
  `created_at`    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP 
);
INSERT INTO users(username,password,firstName,lastName,monthsofExperience,noticePeriod,location,skills,resume)
 VALUES('jidunandan','password','JIDU','NANDAN',36,1,'Gurgaon','React,Node,MySQL','Resume for jidu nandan...'),
 ('kevindavid','passwordKevin','KEVIN','DAVID',24,2,'Pune','AWS,DevOps','Resume for kevin David...');
 

——————————————————————————————————————

———————————CREATE TABLE FOR COMPANY————————
CREATE TABLE `company`
(
  `companyId`            INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
  `companyName`          VARCHAR(200) NOT NULL ,
  `companyLocation`   VARCHAR(20) NOT NULL ,
   `employeeSize` INT NOT NULL,
    );

 INSERT INTO company(companyName,companyLocation,employeeSize)
 VALUES('Airbnb','Bangalore',500),
 ('Amazon','Bangalore',2000),
 ('A-One','Gurgaon',40),
 ('Appollo','Hyderabad',800),
 VALUES('Fuse Universal','UK',250);

——————————————————————————————————————

___________CREATE TABLE FOR JOBS————————————
CREATE TABLE `jobs`
(
  `id`            INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
  `companyId`   INT NOT NULL,
  `designation`     VARCHAR(30) NOT NULL,
  `designationLevel`   VARCHAR(20) NOT NULL ,
  `location`   VARCHAR(20) NOT NULL ,
`description` VARCHAR(10000) NOT NULL,
`jobType` VARCHAR(20) NOT NULL,
`salary` VARCHAR(20) NOT NULL,
`status` VARCHAR(10) NOT NULL,
  FOREIGN KEY(`companyId`) REFERENCES company(`companyId`)
);

INSERT INTO jobs(companyId,designation,designationLevel,location,description,jobType,salary,status)
 VALUES(1,'FrontEnd Developer','Mid Level','Gurgaon','<p>Looking for Mid Level Senior Developer(2-3 years)</p>','Engineering','Rs.3000000','Closed'),
 VALUES(5,'Sales Representative','Beginner Level','UK','<p><strong>About Fuse Universal </strong></p><p>We`re Fuse. And our mission is to help our customers unlock the knowledge and expertise that their people need to improve their skills and perform in their work. Enabling <em>everyday learning moments </em>isn’t just our motto, it’s why our clients like Avon, Dropbox, Hilti and Lotus Cars choose us to help power their organisational learning culture. With our award winning AI powered platform, we are proudly redefining the way that people and organisations learn and communicate. </p><p>From our beginning in London 2010, we now have over 110 employees located across the globe from South Africa, the US, Mainland Europe, India, Singapore and the UK. We encourage each Fuser to decide where they perform at their brilliant best. We invest in our people and culture, offering competitive financial, health, social and security benefits as well as working remotely but collaboratively through our platform. </p><p>We`re on the lookout for the next passionate and ambitious person to join our mission. Are you ready to be part of the Fuse tribe? We would love to hear from you!</p><p><strong>About this role</strong></p><p>You’ll play a critical part in the growth of our organisation as we expand and scale our business. Through collaboration with our sales and marketing teams, the focus of this role is to build the top end of our revenue funnel by proactively communicating with potential customers every day. You’ll be the front line first point of contact for some of the world’s most innovative brands, helping build on their initial curiosity and awareness of fuse. You’ll have a volume quota of new logo meetings to book each month that will support our new business sales team to build a sales qualified pipeline. </p><p>To help you achieve success, our new business team will work closely with you on outreach tactics for each target account, refining and iterating approach as you go. This is a purely outbound sales development role with a heavy focus on telephone prospecting, so it’s essential that you’re dynamic in your communication style, tenacious and resilient in your nature.  </p><p>Within 12 to 18 months we would expect your hunger and drive to succeed in this role to result in a promotion to a new business account executive. </p><p><strong>About the team</strong></p><p>You’ll be part of a driven, winning new business sales team that knows the value of feedback and coaching in order to help achieve our individual and group sales targets. Most importantly, we have fun doing great work together, celebrating each other’s successes. We’re also there to support each other through the inevitable, occasional setback, learning and growing together as a team. </p><p>You’ll join a sales team that recognises the contingency of its success is geared to your ability to hit the ground running as an SDR. You’ll enjoy a world class onboarding and assimilation into our value proposition. And together with your natural ability to run with things quickly, and the targeted contact data that we have ready for the right person to run at, our sales team is focused on having you achieve results and earning commission for meetings booked well before the expiry of your probationary period. </p><p><strong>Your Responsibilities</strong></p><ul style=""> <li style="">Involvement in new logo account planning and mapping exercises through researching purchased data bases, publicly available lists, social media, and other sources.</li> <li style="">Collaborate with Fuse new business sales team to develop, test and iterate messaging across multiple channels, industries and personas. </li> <li style="">Calling prospects to generate interest in Fuse on new logo target accounts in order to generate qualified appointments as a first step.</li> <li style="">Develop leads from initial contact to a qualified appointment for handover to a new business account executive.</li> <li style="">Contribute to sales pipeline development through assigned account prospecting to key decision makers and influencers within target organisations. </li> <li style="">Undertake cold calling campaigns around specific business propositions or market awareness. </li> <li style="">Achieve weekly, monthly, and quarterly volume quota attainment of new logo meetings. </li> <li style="">Sourcing, researching and establishing new relationships with stakeholders as well as handling objections.</li> <li style="">Following up on trade shows, regional events, and other marketing campaigns.</li> <li style="">Take an active part in sales coaching sessions and team wide workshops focused on continuous upskilling of our sales skills to remain ahead of the competition. </li> <li style="">Ensure the customer relationship management (CRM) system is up to date for optimal lead management.</li> <li style="">Develop and maintain expert knowledge of our key industry challenges, the competitive landscape and keep up to date on our product.</li> </ul><p><strong>Requirements</strong></p><ul style=""> <li style="">Must have at least 12 - 18 months B2B SaaS sales experience</li> <li style="">An articulate communicator who can adapt communication style to different audiences, is agile, and can think on their feet.</li> <li style="">Ability to build instant rapport and credibility with stakeholders and influencers. </li> <li style="">Someone who is fearless and understands rejection is a pathway to success.</li> <li style="">Naturally inquisitive and have a genuine desire to learn through asking questions. </li> <li style="">Confident to respectfully challenge the status quo if you feel something can be improved.</li> <li style="">Ability to grasp new concepts quickly and is a self starter who can hit the ground running.</li> <li style="">Experience with Salesforce or HubSpot CRM, and has used sales outreach tools – e.g. Sales Navigator</li> <li style="">Motivated and ambitious to progress to a New Business Account Executive within 12 - 18 months. </li> </ul><p><strong>Benefits</strong></p><ul style=""> <li style="">Remote first and flexible working</li> <li style="">L&amp;D - peer and platform learning - it’s at the heart of what we do</li> <li style="">Medical insurance</li> <li style="">Home-working / Wellbeing allowance</li> <li style="">Perkbox - wide ranging benefits; discounted shopping and services</li> <li style="">Annual leave: 25 days + day off on your birthday + bank holidays</li> <li style="">Employee Assistance Programme</li> <li style="">Enhanced maternity &amp; paternity leave</li> <li style="">Cycle to Work scheme</li> <li style="">Company socials</li> <li style="">Employee recognition awards: Employee of the Month, Long service awards, Employee referral scheme</li> </ul><img src="https://remotive.com/job/track/1814940/blank.gif?source=public_api" alt=""/>','Sales','Rs.800000','Open’),
(2,'UX FrontEnd Developer','Senior Level','Bangalore','<div><b style="font-size: 18px">Are You The Right Fit?</b><span style="font-size: 18px"> </span></div><div><br></div><div><span style="font-size: 11pt">As a Senior User Experience Frontend Engineer, you will play an important role as the communication bridge between product and engineering by transforming design concepts into code to assure the delivery of an enterprise quality user experience across our digital services. You will collaborate daily with user experience designers, product managers, engineers, and many other stakeholders. You are a detail-oriented, user-centered, versatile dreamer and maker. </span></div><br><br><div class="h3">What You Will Do</div><ul style=""><li style="">Work alongside the UI/UX Design team early in the software development life cycle during problem validation and solution design by collaboration on design ideation and research to assess feasibility and propose innovative solutions. </li></ul><ul style=""><li style="">Lead the creation of a component library for our design system, develop functional prototypes for user testing, implement automation processes to streamline design research, and host a content delivery system for efficient distribution of design assets. </li></ul><ul style=""><li style="">Work cross-collaboratively amongst teams to create a best-in-class customer experience  </li></ul><ul style=""><li style="">Equip engineers with the necessary resources to streamline product development. </li></ul><ul style=""><li style="">Support other stakeholders by integrating in-app support for customer success, tracking user interactions for product analysis, and hosting customer support documentation for education and enablement. </li></ul><ul style=""><li style="">Automate your workflow by integration with design tools and continuous integration. </li></ul><ul style=""><li style="">Set strategic goals, measure our effectiveness, devise a cohesive strategy, own and maintain a well-defined roadmap for ongoing initiatives. </li></ul><ul style=""><li style="">Stay up to date with trends and technologies industry-wide and share that knowledge with stakeholders </li></ul><br><br><div class="h3">Skills and Competencies</div><ul style=""><li style="">Bachelor’s degree in computer science or equivalent </li></ul><ul style=""><li style="">7-10 years of professional experience building and maintaining a production application or library using a modern web framework (React, Vue, Angular, etc.) </li></ul><ul style=""><li style="">Experience building and maintaining a component library as part of a Design System </li></ul><ul style=""><li style="">Proficient with HTML, CSS, JavaScript, and TypeScript </li></ul><ul style=""><li style="">Experience with vector graphic editors (Figma, Sketch, etc.) </li></ul><ul style=""><li style="">Experience with build systems (Turborepo, Lerna, etc.) </li></ul><ul style=""><li style="">Experience with module bundler (Turbopack, Webpack, Rollup, etc.) </li></ul><ul style=""><li style="">Experience with automated testing (Cypress, Playwright, Jest, etc.), CI/CD, AWS </li></ul><ul style=""><li style="">Experience working in an agile environment using Kanban for process tracking </li></ul><ul style=""><li style="">Experience with the Web Content Accessibility Guidelines </li></ul><ul style=""><li style="">Excellent written/verbal communication skills </li></ul><br><br><div class="h3">Additional Information</div><ul style=""><li style="">Our headquarters are in <i>Woodbridge, NJ,</i> but we are happy to consider remote candidates in the following states:  <i>AZ, CO, DE, FL, GA, IL, KS, MD, MA, NH, NJ, NY, NC, OH, PA, RI, SC, TX, VA, and WA.</i></li></ul><ul style=""><li style="">The pay range for this position is $144,000– $177,000/year; however, base pay offered may vary depending on job-related knowledge, skills, experience, and location. In addition, we offer full range of medical, financial, and/or other benefits, dependent on the position offered. This information is provided per the Pay Band Transparency Act. Applicants should apply via <a class="postings-link" href="http://www.amazon.com/careers" rel="nofollow">www.amazon.com/careers</a> page.</li></ul><br><br><div class="h3">At Amazon, You will Enjoy</div><ul style=""><li style=""><b>100% Remote-Work Environment: </b>We will provide you with a laptop, hardware and access to necessary resources to perform job duties. </li></ul><ul style=""><li style=""><b>Health and Wellness:</b> Choose from competitive health, dental, and vision plans on one of the largest physician networks available, along with 401(k) with Employer Match, Parental Leave Policy, Adoption Assistance and Company-paid Life Insurance/Long term disability. </li></ul><ul style=""><li style=""><b>PTO and Charitable Time:</b> We have competitive PTO, 12 company paid holidays, Volunteer Time Off and your Birthday Day off! We encourage employees to spend time enjoying life outside of work.</li></ul><ul style=""><li style=""><b>Training and Education: </b>Ability to participate in Business Employee Resource Groups (Women in Tech, Diversity, and Parents &amp; Caregivers), Mentorship Programs, Tuition Reimbursement and Continuing Education Assistance.</li></ul><ul style=""><li style=""><b>Additional Perks:</b> $100 Monthly Work from Home Reimbursement, Identity Theft Protection, Calm Mental Fitness Membership, Employee Discount Program via ADP and more!</li></ul><div><b style="font-size: 18px">Why Work At Amazon?</b></div><div><br></div><div>Amazon is an established SaaS business with the heart of a startup. Our rapidly growing community of diverse and passionate people love to learn, innovate, achieve excellence, and reach new heights – together. If you want to make an impact and develop a career with ample opportunities for mobility and growth, we’d love for you to join us.  </div><div><br></div><div>Loved by more than 1,400 major brands worldwide, our Controls, Integration, and ESG software solutions help companies manage, analyze and report on their leased asset portfolios, and embeds decades of lease management and financial accounting expertise. Over the last two years, our employee base has seen significant growth. Voted one of NJ’s Best Places to Work, we are looking for passionate team-players to help us continue this journey and bring us to the next level.  </div><div><br></div><div>Amazon is an Equal Opportunity/Affirmative Action Employer. All qualified applicants will receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity, national origin, disability, veteran status or other characteristics protected by law. Amazon is a background screening, drug-free workplace. Full-time positions offer a competitive benefits package and salary commensurate with experience. </div><div> </div><div><a class="postings-link" href="http://www.amazon.com/" rel="nofollow" style="font-size: 12pt">www.amazon.com</a><span style="font-size: 11pt"> </span></div><div><br></div><div><br></div><div>#LI-REMOTE</div><img src="https://remotive.com/job/track/1812200/blank.gif?source=public_api" alt=""/>','Engineering','Rs.2300000','Open'),
(4,'FullStack Developer','Mid Level','Bangalore','<p><strong>Appollo</strong> is looking for a <strong>Fullstack Developer</strong> to join our project on a project basis!<br><br>About <strong>Appollo</strong>: We’re a team of tech-savvy, creative &amp; passionate IT professionals. We’ve created a vibrant and performance-driven culture for ourselves where everyone is free to think &amp; act outside the box. There are literally no limits to what you can do here, as long as we WOW our clients and OVER deliver what we promise.<br><br>This <strong>project</strong> Digital Fertility Clinic. A patient-centered, hassle-free, digital fertility clinic to fit your lifestyle, we save you time and money while supporting your journey<br>Current team: TechLead, Mobile, BackEnd, PO, QA<br><br><strong>Required skills</strong>:<br><strong><br></strong>— Strong knowledge of JavaScript / TypeScript 3+ years;<br>— Experience with React 0,5+ years;<br>— Experience with Node.js 3+ years (main NestJS);<br>— Experience with PostgreSQL 2+ years;<br>— Experience with TypeORM 1+ years;<br>— Experience with Redis 0,5+ years;<br>— Experience with message brokers 1+ years (RabbitMQ / Kafka etc);<br>— Experience with GraphQL 1+ years;<br>— Experience with Docker;<br>— Intermediate level of English.<br><br><strong>Nice to have skills</strong>:<br>— Experience with AWS;<br>— Development API for mobile apps;<br>— Experience with Firebase;<br>— Experience with Websockets;<br>— Experience with Stripe;<br>— HIPAA compliance understanding;<br>— Experience with AI-related 3rd-party services;<br>— Experience with geolocation services.<br><br><strong>Main responsibilities</strong>:<br>— Develop from scratch NestJS application with PostgreSQL database and 3rd party API integration<br><br><strong>What we offer</strong>:<br>— Flexible schedule &amp; opportunity to work remotely;<br>— Opportunity to work full remotely;<br>— Opportunity to boost your professional &amp; personal growth;<br>— Regular team gathering activities;<br>— Friendly &amp; open team who have fun creating cool projects together;<br><br><strong>How we operate</strong>:<br>— We promise dramatic professional growth &amp; interesting work;<br>— Bring ideas that will change how Appollo operates, and you will receive our gratitude and rewards;<br>— Your opinion matters. Appollo is not a typical ’bureaucratic company, and our employees are our core value;<br>— Your compensation grows with your responsibility zone;<br>— If something doesn’t go smoothly or can be simplified, just let us know — you are welcome to do so;<br>— You have a say in everything we do, starting from the roadmap, creating requirements, sprint planning, etc.;<br>— If you feel that everything above is about you, get in touch. We’re always glad to welcome stubborn, enthusiastic, and result-oriented buddies to our team.<br><br><strong>Are you interested in working with us?</strong><strong><br></strong></p><p><strong>LET’S MOVE THE WORLD TOGETHER!</strong></p><img src="https://remotive.com/job/track/1811968/blank.gif?source=public_api" alt=""/>','Engineering','Rs.2000000','Open'),
(4,'Frontend Developer','Beginner Level','Remote','<p><strong>Job Purpose</strong></p>\n<p>Appollo is an integrated internet software and marketing company that incubates, launches, and operates a growing library of web and mobile applications used by millions of users worldwide.</p>\n<p>We are looking for a <strong>Senior Frontend Developer</strong> who can work on translating the design requirements into programming needs. The Ideal candidate will work closely with the UI/UX team and execute the designs into web applications.</p>\n<p></p>\n<p><strong>Responsibilities</strong></p>\n<ul style=\"\"><li style=\"\">See the frontend development and be responsible for making refactoring and improvement suggestions</li><li style=\"\">Demonstrated ability to be self-motivated to complete stories and know when to ask for additional clarification and help</li><li style=\"\">Translate the UI/UX design wireframes to actual code that will produce visual elements of the application</li><li style=\"\">Develop new user-facing features</li><li style=\"\">Build reusable code and libraries for future use</li><li style=\"\">Optimize application for maximum speed and scalability</li><li style=\"\">Collaborate with other team members and stakeholders</li><li style=\"\">Provide website maintenance and enhancements</li><li style=\"\">Write functional requirement documents and specifications</li><li style=\"\">Create quality mockups and prototypes on tight timelines</li><li style=\"\">Assist back-end developers with coding and troubleshooting</li><li style=\"\">Create cascading style sheets (CSS) that are consistent across all browsers and platforms</li><li style=\"\">Write and maintain Unit Tests and components snapshots</li><li style=\"\">Stay up-to-date on emerging technologies</li><li style=\"\">Any other ad hoc activities</li></ul>\n<ul style=\"\"></ul>\n<p></p>\n<p><strong>Requirements</strong></p>\n<ul style=\"\"><li style=\"\">5+ years as a front-end developer</li><li style=\"\">Proficiency in developing HTML and CSS (2/3)</li><li style=\"\">Proficiency in JavaScript/JQuery/React.js</li><li style=\"\">Experience writing robust test cases through Unit Test and Snapshots is a must</li><li style=\"\">Good understanding of server-side CSS pre-processing platforms</li><li style=\"\">Experience with TypeScript</li><li style=\"\">Experience with backend web technologies is a plus(Node.js, Ruby on Rails)</li><li style=\"\">Experience with Next.js is a plus</li><li style=\"\">Experience solving cross-browser compatibility issues and ways to work around them</li><li style=\"\">Proficient understanding of code versioning tools (Git)</li><li style=\"\">Experienced in SCRUM and/or Kanban SDLC</li></ul>\n<ul style=\"\"></ul>\n<p></p>\n<p><strong>Soft Skills</strong></p>\n<ul style=\"\"><li style=\"\">Good communicator</li><li style=\"\">Strong team player</li><li style=\"\">Good problem-solver</li><li style=\"\">Adaptable</li><li style=\"\">Good work ethics</li></ul>\n<p></p>\n<p><strong>Benefits</strong></p>\n<ul style=\"\"><li style=\"\">Future growth: Optimal time to join our growth story</li><li style=\"\">Competitive compensation: We ensure that we offer a highly competitive salary</li><li style=\"\">15 days paid vacation, 5 days paid sick annually</li><li style=\"\">Full remote working environment with flexibility to set your own daily schedule</li></ul>\n<p></p>\n<p>Here at Appollo, we believe wholeheartedly in building a culture of appreciation, respect, inclusion, and fun! We also have a range of perks that (depending on your region) may include: active give-back programs, bring your pet to work options, work from home gift baskets, paid maternity leave, company swag, festival gifts &amp; cash bonuses, and much more.</p>\n<p>You`re encouraged to apply even if your experience doesn`t precisely match the job description. Your skills and passion will stand out \u2014 and set you apart \u2014 especially if your career has taken some extraordinary twists and turns. We welcome diverse perspectives and people who think rigorously and aren`t afraid to challenge assumptions.</p>\n<p>If you are a talented and ambitious Senior Frontend Developer<strong>(React)</strong>that`s ready to take your career to the next level, and want to work with a small group of like-minded people, you`ve come to the right place.</p>\n<p>Send us your resume and a brief message explaining why you`re the perfect fit!</p>\n<p><strong>Equal Opportunity Employer Statement</strong></p>\n<p>Appollo is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.</p>\n<p></p>\n<img src=\"https://remotive.com/job/track/1811625/blank.gif?source=public_api\" alt=\"\"/>','Engineering','Rs.1000000','Open');

 


—————————————————————————————————

___________CREATE TABLE FOR JOB APPLICATIONS————————————
CREATE TABLE `jobApplications` (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `job_id` INT NOT NULL,
  `user_Id` INT(20) NOT NULL,
  `specific_resume` VARCHAR(2000) NULL,
  `cover_letter` VARCHAR(2000),
  `applied_at`    DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(`job_id`) REFERENCES jobs(`id`),
  FOREIGN KEY(`user_id`) REFERENCES users(`userId`)
);

-------------------------------------------------------------------------------



API LIST ->
---------------------------
To fetch All jobs
---------------------------

METHOD : GET 
URL : localhost:3001/jobs/all 

Response : {
  jobs:[
    {
      companyName:'',
      description:'',
      salary:'',
    },
    ...
  ]
}


-----------------------------
To Apply for a job
--------------------------------
POST -> 
URL : localhost:3001/jobs/apply
payload: {
    "jobId":3, //job id
    "userId":12,  //users id
}

Response: {
  response:{
    status:true
  }
}
