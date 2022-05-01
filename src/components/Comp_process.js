import Rellax from "rellax";
import React, { useRef, useEffect } from "react";
//IMGs
import paper from '../img/paper.jpg';
import workflow from '../img/workflow.jpg';
import ipad from '../img/ipad.jpg';



function Process() {

   const rellaxRef = useRef();

  useEffect(() => {
    new Rellax(".animate", { // <---- Via class name
      speed: 2,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });
    new Rellax(".animate-three", { // <---- Via class name
      speed: 2,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });
}, []);


  return (
   
        <section className="process">
          <div className="fullWidth">
            <div className="process-section">  
              <div className="text-entry">

<h2 id="My Process - ATG Account Linking">My Process</h2>
<p>I am a fluid person by nature.  I am a proponent of simplicity and advocate for such in my style of management and project tracking. Methodologies exist for a reason and I appreciate the foundation and guidance they provide but my approach is to know when and where do they best play their role. I have experience as a designer, developer and product manager and I know how those workflows and processes flow together to create the software development life cycle process and how they all contribute to a products success. </p>
<p>However no matter what role I may be fulfilling, my process can be broken down to the following phases. </p>
<p>Planning and Investigation - Build and Execution -  Follow up and Iterate</p>
<h3 id="Planning and Investigation">Planning and Investigation </h3>
<h4 id="Define objective - Evaluate Ideas">Define objective - Evaluate Ideas </h4>
<p>We all know what an MVP is and that normally is the bare minimum we aim for in creating a new feature or product from the ground up. What is the minimum amount of features, or content needed to drive said product to success. More to the point, is the feature/product we’re aiming to build going to provide value? How do we determine that potential value? </p>
<p>There are several methods of quantifying potential or actual worth of a feature or solution.  </p>
<p>Will it increase revenue? Will it increase lovability of the product? Will it make it easier to develop? Increase productivity of the company? While asking these questions I will resort to researching industry trends, competitive analysis and looking at our own data. </p>
<p>Using data is a key component to determine potential value. In most cases, we’re trying to solve a problem by introducing a new feature. However these problems may not always be externally facing. This is when I go back to the tried and true method of asking if this is a Person, Process or Technology problem? From there we can easily define what our objectives and goals are of our project ideas and we have an idea of how it will be valuable to the business to proceed. </p>
<h4 id="Research, Brain Storm and Collaboration">Research, Brain Storm and Collaboration</h4>
<p>As the ‘Product Owner’ I am the SME, the guiding post, the one everyone will be turning to for answers. I like to take as much time to absorb all there is about a product space. I often say ‘if I don’t know the answer to your question I know how to find it’. What this enables me to do is empower those around me, which in my opinion is the key facet of being a great PO. </p>
<p>When starting a new project I like to pull inspiration from several sources, competitors and or other forms of digital platforms that have features that best depict what we’re trying to accomplish, relatively speaking. I also love to spend time creating my own mood boards. Colors, design samples, and or anything that may help me get into the mood or get into the mindset of the personas I am creating for. I am a visual person by nature and this helps not only me solidify my own thoughts and goals but also helps communicating with my stakeholders and team members. More to the point it helps illustrate what direction the industry and culture of online products is heading and allows me to think outside the box.</p>
<p>Next is to engage my team members. Designers, Developers, Program management and so on. Being able to break down business acumen, goals and functional needs to more digestible requirements and objectives for all groups to better understand what we’re aiming to deliver is key. Then I can focus on creating a bullet proof vision and mission for our teams to focus and recall upon when we’re in need of a refresher or help down the road when determining scope and goals. User personas start to come into focus, the fog starts to dissipate and we all start to see a bit more clearly of what we’re building, and who are we building it for. </p>
<h4 id="Product Vision and goal alignment">Product Vision and goal alignment </h4>
<p>At this stage we start to solidify tasks, designs and the next steps before building takes place. Ensuring stakeholders, vendors, 3rd parties and of course our teams are in alignment of the path we’re about to embark on together. This allows us to feel confident as a team that we’re on the right track together as a unit. I’ve learned this ensures that there is less friction and surprises for all down the road. Of course there is always that unexpected and rather massive pivot halfway through a quarter, right? </p>
<p>I like to list out problem statements, goals, roadblocks, possible risks and questions and so on, from there I go down my list with the intent to draft a response on how each item could or can be solved. This could be anything from how does someone navigate a feature  to our launch and roll out plans. I then think about all possible dependent systems, and then confirm assumptions on system limits and resource allocations across my teams. There are also instances where perhaps an internal tool is being built, how do we get people on board to use said tool? Do we need to hire more staff to make this process work? What are other teams doing that we could either utilize and or need to be aware of? It helps a lot to be active with in the product space of an organization to know how the company functions, what others are working on and what else may be impactful to our projects and timelines. </p>
<p>By this stage KPIs come into focus - I start formulating long term success metrics and measurement goals by asking questions such as; how do we measure success? What quantitative and qualitative measurements can we put into place both short term and long term? What baseline data do we have to pull from and or can we establish any at this point? Obviously all of these items are subject to change. You won’t always have data or things to draw on, ambiguity is a large part of the job and being able to navigate through the fog is the most challenging and yet, exciting moments of product development. </p>
<p>I have used a number of tools and utilities to establish baselines and KPIs such as: Tableau, google analytics, surveys, user (A/B) testing and or other data sources when available. Community engagement, and social media can also be a wonderful source of qualitative information as well! </p>

              </div>
              <div className="paper" style={{backgroundImage: `url(${paper})`}}></div>  
            </div>    
            <div className="process-section">  
              <div className="section-header">
                <img className="workflow-img animate" src={workflow}/>
              </div> 

              <div className="text-entry">
<h3 id="Build and Execution">Build and Execution</h3>
<h4 id="Defining success">Defining success </h4>
<p>How do we define success of a product? It’s one of those questions you can ask and you may receiver a different answer from everyone. It’s an ambiguous question. In almost every aspect our goal is aimed at increases of some sort, increase in traffic, up time, revenue, sales. Or decreasing risk, time spent on building or resolving issues internally or for our end users. In the end it’s subjective to the product owner, and project they’re working on. Success to me personally, means we have solved a problem and created a lovable and useable product or feature. </p>
<p>We live in a world where most companies and people are aimed at exponential growth with a lack of consideration on the long term sustainability of a product. You will be asked to build and deliver non stop. It’s our job as a product person to play the devils advocate, to be the challenging voice to stakeholders and to push back when needed to align on a goal that fits our business objectives but also aligns to the goals of making the product better. That’s the key tenant of being a product person in my opinion. I don’t like to build things for the sake of building something. I want it to be meaningful and impactful. That is how I define, success.  </p>
<h4 id="Scope and prioritization">Scope and prioritization </h4>
<p>Scope. That dreaded word we all have to deal with. The good news is, we have prioritization, our wonderful friend who will help us through this challenging road ahead. Setting priority will help us define scope, it will help us keep within the bounds of our teams limits and allows us to buffer enough time in between tasks, meeting and other duties related to the project and or role responsibilities. Things like product documentation, internal testing and code reviews all take time that is vital to a products success. </p>
<p>We all know the stakeholders will be asking for the world, our job is to help them understand what we can do, how long it will take, and what can they expect and when. Once I have enough requirements to break tickets out with my developers I like to start gating level of efforts. Majority of the time that comes in the form of story points which I translate to rough time blocks. Say 2-3 points may take a couple hours or maybe a couple days, 4-6 we’re talking maybe a week, and 7+ is a ticket that typically needs more attention to be broken down into something more manageable. </p>
<p>Story points to me are a guideline though, some people take them very seriously. As mentioned earlier I am a very fluid person. Velocity to me tells me how much my team is producing vs how much we’re asking of them. Velocity is not a metric to enforce, but a metric to create balance and a smooth flowing team. If you see velocity up one week but down the next that indicate a problem, in most cases it comes back to the ticked work being too vague and or too big and requires to be broken down further or a roadblock that has occurred that needs to be addressed. Again, these are guideposts for effective product management, if used correctly. </p>
<h4 id="Wireframes and User Journey">Wireframes and User Journey </h4>
<p>As we get started on our projects wireframes are an essential part of the process that can really help you get a head start. Not only do these assets help in breaking down tickets but they help create discussion and collaboration between engineers, designers and product alike. They will server as tools to illustrate to stakeholders the functionality and flow of the proposed solutions. They will aid very much in the same way working with engineers to showcase the functional and business side of what they are building and act as a guide for when development begins. </p>
<p>Wireframes are also handy when working through the user flow and or the journey of a user. There are some key differences between the user flow and user journey, both have their places in this process. However one aspect that I feel is really important is to think big picture when building a product and not only just the aspects of a specific feature or how they navigate the product. We want to look at how they find the product, discover new things about the product and most importantly retainment, how do we get them coming back or better put, how do ensure they LOVE the product? These questions along with asking, “How are we making their lives better?” I believe is key in this process. We could build something and while very impressive, is it realistic and applicable to our end goals and end users? What stage is the user in while using our product? Being in live streaming technology a key focus for me is the differences between someone starting out on our platform vs the career streamer. Tools that can be used for both sets of users in various phases of their career growth is important to keep in mind. The same could be said about virtually, any other product out there. That way you can focus your efforts in guiding those specific users to the goals both you and they want to acheive. </p>
<h4 id="Development and Acceptance Criteria">Development and Acceptance Criteria </h4>
<p>I have a background in full stack development, I really appreciate a solid set of requirements and acceptance criteria. What is it that I need to reach to ensure this is ‘done’. I pride myself in writing tickets that include a valuable user story, requirements, acceptance criteria, notes, designs, wireframes and anything else that may be a roadblock or items we need to follow up on before anything is released.</p>
<p>I am also very attuned with how development life cycles go and how dependent we can be on other teams inside and outside our organization or department. As a Product Owner I do my very best to be the buffer between my developers and my stakeholders. Collaboration is big for me however I also play the role of the advocate for my teams. It’s important to establish proper workflows and communication pipelines with various stakeholders and other teams to ensure nothing falls through the cracks. Nothing is worse than a stakeholder going to a developer directly, something gets built and is released without the proper procedure and oversight being applied. </p>
<p>That all said I like to be the one to empower my teams, I ask what roadblocks are in the way and how can I get them what ever it is they need to be successful. </p>
<h4 id="Product Launch and Showcase">Product Launch and Showcase</h4>
<p>We made it! Through all of the planning, time spent building, testing, fixing bugs, and copious amounts of caffeine we’re at the finish line. Time to go live. This process is always a fun one however there are just a few last min things to wrap up. The key components to a product launch is support, communication, documentation on new features and most importantly, never do it on a Friday! </p>
<p>I have been through many go lives, both internal and external and what I have learned is that you can never been over prepared for one. While building we should have already decided if this is going to be a soft launch for beta users, doing an A/B test or is this the final “general availability” launch for all? This will help preparing for the right kind of support you may need and ensure you dedicate enough time to release a product while having enough hands on deck to monitor the health of the product, servers and or other components of the team and organization.</p>
<p>Communicating to your internal support and customer service departments to ensure they are aware of upcoming changes and most obviously letting your stakeholders know what’s going on. I think the last bit  I have to talk about on this topic, is migration strategy for veteran users vs new ones. A lot of the time in live services you can go one of two ways. You either shift everyone over to the new feature set/platform or you have it set for only new incoming traffic while you work on migrating your grandfathered users to the new system over a period of time before deprecating a heavily used feature or tool. Of course that should have been identified way before this stage of the process but a vital component of the product life cycle and user journey. </p>
                  
              </div>
            </div>    
            <div className="process-section">  
              <div className="section-header">
                <img className="ipad-img animate-three" src={ipad}/>
              </div> 

              <div className="text-entry">
<h3 id="Iteration">Iteration</h3>
<h4 id="I know I said we’re done but…">I know I said we’re done but… </h4>
<p>So in a lot of cases, especially if we’re on a time crunch the product that just went live had a lot of ‘things’ cut from the original scope. Maybe some corners were cut to deliver in time or maybe something was missed. It happens. It’s time to <i>iterate</i>. I know this is a word that is thrown around a lot in the agile development world but it does play a very important role, however the power from iteration comes from how it’s implemented. </p>
<p>We got a product feature live, but we’re experiencing users disconnecting every 30 minuets, or perhaps we started to experience an uptick in lag or maybe the interface is just not performing the way we expected it to. Monitoring these types of things post launch is important to any projects success because it allows us to act quickly and resolve any issues or see how we can make things better. </p>
<h4 id="Metrics, data, and the story thus far!">Metrics, data, and the story thus far! </h4>
<p>Those KPIs, measurements of success and user journeys we went through? This is where they really shine. While we analyze user data we can create reports and understand how our product is being used. This will allow us to confirm our earlier hypothesis and assumptions but also ensure the stability of our products. </p>
<p>I like to use a myriad of tools such as Grafana, Tableau or just looking at tables of data to craft a story, to showcase how a product is doing and how our efforts provided value.  In all cases though these will serve us well in reviewing our processes and products health. At this stage we can infer a lot in terms of how we work as a team, how we provided value and most importantly, how can we course correct if we need to. </p>
<h4 id="Optimizations">Optimizations</h4>
<p>As we review the product we can look to where we can improve and make adjustments to our feature sets and tools to really optimize a tool or user flow. Things like when certain processes run, the data it’s sifting through or something as simple of the order of call to actions and other UI elements. Being able to iterate on a product or design is how we can deliver value quickly and effectively by observing the data we have collected based on the goals we outlined earlier in the process.</p>
<p>The key component in this evaluation is to receive and ensure you have meaningful feedback that allows you and the team to take action on. Traffic and usage metrics are great but that will only tell you that people are looking at your product, how are your conversion rates, your click throughs etc performing? There is so much to cover at times it can seem overwhelming, as a product owner it is my goal to distill the data and remove the complexity of it for my team and stakeholders to better consume what is really important so we can all figure out what our next steps are. </p>
<h4 id="Rinse and repeat">Rinse and repeat </h4>
<p>And here we are, it may seem like the end of the road but in reality we’re just getting started. I try my best to keep things simple. There is a process, methodology or app out there for everything these days. Everyone has an opinion on product design, management and development practices that it can seem overly complex. The most important thing I have learned however is that while all of those things have merit, it’s important to tell yourself it’s going to be okay. Remember, no one knows everything all the time, no one is going to have all the answers. This is why I fall back on my process and my philosophy of simplicity and going back to the basics. </p>
<p>Even if I may seem lost at times, I can come back to this guide and figure out what my next steps are. That provides me comfort and confidence that no matter the task ahead of me I can tackle it with the right approach and support from my team. Even if this write up is really a way to showcase my thoughts and strengths, without my teams I am nothing. We all rely on each other to reach our end goals. I may be a man of many talents and experiences but above all else, the real power behind any process and product is the people crafting it. </p>
<p>If you managed to make it this far I really appreciate you reading what I had to say and if you have any feedback or wanna talk more about this please feel free to drop me a line at <a href="mailto:andrew@pixelurbia.com">andrew@pixelurbia.com</a>, I’d love to hear from you!</p>
              </div>
            </div>    
          </div>  
        </section>
  );
 

}

export default Process;