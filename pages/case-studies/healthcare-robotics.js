import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import "@fontsource/roboto-mono"
import styles from '../../styles/hcrl.module.css'
import "@fontsource/chivo"
import "@fontsource/cormorant"

export default function HCRL() {
    return (
        <div>
            <div>
                <h1 className={styles.pagetitle}>HEALTHCARE ROBOTICS LAB</h1>
                <p className={styles.titlesub}>Learning to Design Inclusively for Accessibility</p>
            </div>

            <div>
                <h2 className={styles.roletitle}>ROLE</h2>  
                <p className={styles.sectiontext}>During Summer 2022, I worked in the Healthcare Robotics Lab under 
                an <span className={styles.boldblue}>REU</span> (Research Experience for Undergraduates). I plan to continue working in the lab during 
                the school year.</p>
                <p className={styles.sectiontext}>Currently, I&apos;m working with my my mentor, <span className={styles.boldblueunder}><a href="https://cseweb.ucsd.edu/~akubota/">Alyssa</a></span>, on a paper 
                for <span className={styles.boldblueunder}><a href="https://humanrobotinteraction.org/2023/">HRI 2023</a></span> exploring how robots can support people in identifying and achieving their personal goals
                throughout a longitudinal health interventional (cognitively assistive robots), specifically for 
                people with Mild Cognitive Impairment (PwMCI).</p>  
            </div>

            <div>
                <h3 className={styles.sectiontitle}>Healthcare Robotics Lab</h3>  
                <p className={styles.sectiontext}>The <span className={styles.boldblueunder}><a href="http://healthrobotics.ucsd.edu/">Healthcare Robotics Lab</a></span> aims 
                to design novel technologies to support people with disabilities and their surrounding support 
                network within the community, including friends, family, and the clinical workforce. The lab seeks to 
                design with health equity and community in mind, making sure our work is human-centered and reflects the needs and ideas of marginalized communities. 
                Making sure to take into account critical health technology design approaches, the lab places an emphasis 
                on the exploration of the ethical, legal, and social implications (ELSI) of our research. </p>  
            </div> 

            <div>
                <h3 className={styles.sectiontitle}>A Deep Dive into Accessibility and Inclusive Design</h3>  
                <p className={styles.sectiontext}>The design classes I&apos;ve taken at here at UC San Diego teach you the 
                essentials for building a relatively strong product design project. We conduct our initial user research, 
                determine a problem statement to work around, ideate, iterate, and do everything in between, producing 
                a final product we believe can benefit a particular user group we&apos;ve defined. However, these classes don&apos;t 
                place an emphasis on the importance of accessibility in our designs, and is often left as an afterthought 
                and not considered from concept to creation. Because of this, we end up with a final product that is 
                designed for a very specific user group—oftentimes based on our personal abilities—that encompasses those 
                of a specific gender, tech literacy, physical ability, specific access to money and time, etc. despite the 
                diversity of humans, meaning we end up ignoring a large, varied population of people (<span className={styles.boldblueunder}><a href="https://www.microsoft.com/design/inclusive/">Microsoft Inclusive 
                Design Toolkit</a></span>). Being able to design products and experiences with accessibility and inclusivity as a 
                priority can lower barriers and provide more opportunity for a wide array of people and communities.</p>
                <p className={styles.sectiontext}>Everything I have learned from the lab through discussion and work 
                has inspired me to learn more about accessibility and inclusivity in the design and research realm.</p>  
            </div> 

            <div>
                <h3 className={styles.quote}><span className={styles.quotations}>&quot;</span>Solve for one, 
                extend to many<span className={styles.quotations}>&quot;</span></h3>
            </div>

            <div>
                <p className={styles.sectiontext}>The lab placed an emphasis on answering the question:</p>  
            </div> 

            <div className={styles.bluecontainer}>
                <p className={styles.designWith}>How Can We Design <span className={styles.underline}>With</span> Others, Not Just <span className={styles.underline}>For</span> Others?</p>
            </div>

            <div>
                <p className={styles.sectiontext}>This question changed my entire mindset on the design process as I&apos;ve 
                grown so familiar with the concept of designing for others in my design classes, work, and personal 
                projects. We were also reminded to focus on <span className={styles.boldblue}>avoiding technosolutionism</span> when 
                working on our studies.</p>  
                <p className={styles.sectiontext}>In the lab, we focused a lot on <span className={styles.boldblue}>co-designing</span> with user groups to make sure what we&apos;re working on is 
                personalized and reflective of what users in those groups want. For example, we already have tools 
                like Alexa and Siri in our households, but they don&apos;t really work well for people with dementia as 
                these tools are not co-designed with people with dementia. In the future, most new technologies are 
                not going to be designed for people with dementia (more designed for). While co-designing with these 
                groups, it is important to not be extractive and use them just for their experiences.</p>
            </div> 

            <div>
                <h3 className={styles.sectiontitle}>So, What Am I Working On?</h3>  
                <p className={styles.sectiontext}>As mentioned earlier, I&apos;m working with my my mentor, <span className={styles.boldblueunder}><a href="https://cseweb.ucsd.edu/~akubota/">Alyssa</a></span>, on a paper 
                for <span className={styles.boldblueunder}><a href="https://humanrobotinteraction.org/2023/">HRI 2023</a></span> exploring how robots can support people in identifying and achieving their personal goals
                throughout a longitudinal health interventional (cognitively assistive robots), specifically for 
                people with Mild Cognitive Impairment (PwMCI).</p>  
                <p className={styles.sectiontext}>I started by reading literature on PwMCI and how they interact with 
                technology-delivered health interventions, such as iPad apps, and design considerations (UX/UI) for PwMCI. 
                I consolidated the information I read by creating user personas, conducting a competitive analysis with 
                similar apps (regenerative and compensatory training applications), understanding pain points, creating 
                “How Might We” statements, and journey maps to understand the needs of PwMCI when interacting with 
                technology-delivered health interventions. Being able to understand the population to the best of my 
                ability would help me design <span className={styles.boldblue}>with</span> PwMCI better.</p>
            </div>

            <div>
                <h3 className={styles.subsectiontitle}>Examples</h3>  
                <div className={styles.twocolcont}>
                    <div className={styles.twocol}>
                        <Image src="/images/healthcare-robotics/ux-strategies.jpg" width={680} height={509} />
                    </div>

                    <div className={styles.twocol}>
                        <Image src="/images/healthcare-robotics/painpoints.jpg" width={652} height={401} />
                    </div>
                </div>
                <div className={styles.twocolcont} style={{paddingTop: "2%", paddingBottom: "0.5%"}}>
                    <div className={styles.twocol}>
                        <Image src="/images/healthcare-robotics/userpersona1.jpg" width={465} height={445} />
                    </div>

                    <div className={styles.twocol}>
                        <Image src="/images/healthcare-robotics/userpersona2.jpg" width={491} height={445} />
                    </div>
                </div>
            </div>

            <div>
                <p className={styles.sectiontext}>I did a few <span className={styles.boldblue}>pilot studies</span> with other people in the lab, and we then 
                conducted in-person interviews with 5 PwMCI, who were all from a related clinical intervention where they 
                were involved in ME-CCT-MCI (Motivationally Enhanced Compensatory Cognitive Training for Mild Cognitive 
                Impairment). We are maintaining the interventions these users have already received, and are making the 
                assumption these users are already familiar with the intervention In these interviews.</p>  
                <p className={styles.sectiontext}>I led the <span className={styles.boldblue}>live sketching session</span> in order to identify concrete designs 
                for human-robot interactions, specifically for when users utilize the robot for goal setting, framing 
                those goals into the SMART (Specific, Measurable, Achievable, Relevant, and Time-Bound) framework, and 
                how robot interactions can increase user motivation to achieve their goals. I would show my sketches to 
                the interviewee and asked them what they thought of the sketch and if it was representative of what they 
                want during their interactions. During these interviews, it was important to give users moments time to 
                reflect and think, help them come up with ideas on their own, and build rapport and trust with these 
                communities and individuals we&apos;re working with.</p>
            </div>

            <div className={styles.twocolcont} style={{paddingBottom: "0.5%"}}>
                    <div className={styles.twocol}>
                        <Image src="/images/healthcare-robotics/livesketch-1.jpg" width={598} height={505} />
                    </div>

                    <div className={styles.twocol}>
                        <Image src="/images/healthcare-robotics/livesketch-2.jpg" width={604} height={323} />
                    </div>
            </div>

            <div>
                <p className={styles.sectiontext}>After these interviews, we implemented design choices each participant 
                talked about into a very lo-fi prototype we could show participants through a video demonstrating how 
                they would interact with it. We showed these videos to 3 of the 5 participants we conducted the initial 
                in-person interviews with, asking if there was anything that stood out about the video, anything about 
                the interaction they liked, would change, and if the interaction would make them feel more motivated to 
                work on their goals.</p>  
                <p className={styles.sectiontext}>We then did individual rounds of <span className={styles.boldblue}>Grounded Theory-Based Analysis</span> (which 
                reminded me a lot of Affinity Diagramming in UX!) and did a group analysis to narrow down the 
                main themes and subthemes we found from our interviews.</p>
            </div>

            <div>
                <h3 className={styles.subsectiontitle}>Goal Setting Analysis</h3>  
                <div className={styles.twocolcont}>
                    <div className={styles.twocol}>
                        <Image src="/images/healthcare-robotics/goalsetting-individual.jpg" width={511} height={388} />
                    </div>

                    <div className={styles.twocol}>
                        <Image src="/images/healthcare-robotics/goalsetting-group.jpg" width={761} height={402} />
                    </div>
                </div>
            </div>

            <div className={styles.twocolcont} style={{paddingTop: "2%", paddingBottom: "1%"}}>
                <div className={styles.twocol}>
                    <div className={styles.buttoncontainer}>
                        <a href="https://app.mural.co/t/sanika1545/m/sanika1545/1663085879096/552aa4801e37603a5755ec158c4b7ab645a0b4a1?invited=true&sender=6dc77cc3-8def-4de9-a872-412dedbc455f" className={styles.button} target="_blank" rel="noreferrer">INDIVIDUAL ANALYSIS</a>
                    </div>
                </div>

                <div className={styles.twocol}>
                    <div className={styles.buttoncontainer}>
                        <a href="https://app.mural.co/t/sanika1545/m/sanika1545/1663171217396/c022b1bc44d7e0bb559529136df3a853e2dd5f08?invited=true&sender=bd746a76-2e01-4986-abf3-0834e0c50b98" className={styles.button}>GROUP ANALYSIS</a>
                    </div>
                </div>
            </div>

            <div>
                <h3 className={styles.sectiontitle}>Next Steps</h3>  
                <p className={styles.sectiontext}>We plan to develop a hi-fidelity prototype of the robot interactions 
                PwMCI would experience based on their design suggestions. I will work on designing responsive UI 
                iterations based on insights from research to improve accessibility and suability for PwMCI using 
                cognitively assistive robots at home.</p>  
            </div>

            <div>
                <h3 className={styles.sectiontitle}>Takeaways</h3>  
                <p className={styles.sectiontext}>+ We want to reduce barriers and frustrations by designing with users, not for users.</p>  
                <p className={styles.sectiontext}>+ Accessibility and Inclusive Design are oftentimes left as an 
                afterthought when it should be prioritized. It&apos;s common for people to jump the gun and immediately 
                design based on their personal experiences, abilities, and biases, which leads to exclusion. We are 
                able to design products and experiences the have utility across a spectrum of abilities.</p>  
                <p className={styles.sectiontext}>+ The interviews with PwMCI have been extremely fulfilling and has 
                inspired me to continue my work in the lab in improving accessibility.</p>  
            </div>

            <div className={styles.backbutton}>
                <Link href="/">BACK</Link>
            </div>
        </div>
    )
}