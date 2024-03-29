import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import "@fontsource/roboto-mono"
import styles from '../../styles/kini.module.css'
import "@fontsource/chivo"
import "@fontsource/cormorant"

export default function KiniKoffee() {
    return (
        <div>
            <h1 className={styles.kinititle}>KINI KOFFEE</h1>

            <div className={styles.aboutcolscont}>
                <div className={styles.aboutcols}>
                    <h2 className={styles.abouttitle}>ROLE</h2>
                    <p className={styles.aboutdescription}>UX Researcher</p>
                </div>

                <div className={styles.aboutcols}>
                    <h2 className={styles.abouttitle}>TIMELINE</h2>
                    <p className={styles.aboutdescription}>Jun - Sep 2021</p>
                </div>

                <div className={styles.aboutcols}>
                    <h2 className={styles.abouttitle}>TEAM</h2>
                    <p className={styles.aboutdescription}>Edward De Leon, Stella Seki, Chynna Tumalad, Deepika Vuppala</p>
                </div>

                {/* blank */}
                <div className={styles.aboutcols}>
                    <h2></h2>
                    <p></p>
                </div>
            </div>

            <div>
                <h3 className={styles.sectiontitle}>OVERVIEW</h3>
                <p className={styles.sectiontext}>Located in Del Mar and Encinitas (San Diego), Kini Koffee is a female-owned coffee shop 
                featuring unique and creative drinks. Its aim is to build a community of women who work unconventional jobs 
                while also creating a fun place for people to grab a quick drink on their way to the nearby beaches.</p>
            </div>

            <div>
                <h3 className={styles.sectiontitle}>ROLE</h3>
                <p className={styles.sectiontext}>As the team&apos;s UX Researcher, I spearheaded the research and interview process, 
                including the end-to-end process involving recruitment and synthesis. In collaboration with the UI/UX 
                and Visual Designers, I helped pull key insights from our research and interviews to help inform our design decisions. 
                The work showcased below are my <span className={styles.bolded}>primary contributions.</span></p>
            </div>

            <div className={styles.buttoncontainer}>
                <a href="https://www.kinikoffeesd.com/" className={styles.sitebutton} target="_blank" rel="noreferrer">CHECK OUT THE SITE!</a>
            </div>

            {/* horizontal linebreak */}
            <hr className={styles.breakline} />

            <div>
                <h3 className={styles.sectiontitle}>THE OBJECTIVE</h3>
                <p className={styles.sectiontext}>To address both client and customer needs, we created 
                two problem statements that encompassed our goals for this project while designing Kini 
                Koffee&apos;s website and expanding their brand:</p>
            </div>

            <div className={styles.bluecontainer}>
                <h3 className={styles.problemstatementtitle}>PROBLEM STATEMENTS</h3>
                <p className={styles.problemstatements}>1. Kini Koffee needs a place where all their information is centralized so customers can easily learn more 
                    about the business, drinks, and prices.</p>
                <p className={styles.problemstatements}>2. People who are looking for coffee shops in the Del Mar area need access to attractive, unique features 
                    about Kini Koffee to encourage them to go over there over any other coffee shop in the area.</p>
            </div>

            <div>
                <h3 className={styles.sectiontitle}>WHO ARE OUR USERS?</h3>
                <p className={styles.sectiontext}>Kini Koffee wants to be portrayed as a &quot;fun, beachy, creative&quot; coffee shop 
                for people around ~16-20 years old. With this in mind, to begin our research, I focused on user surveys and customer interviews 
                to determine what people think of the brand in order to figure out the questions our team needs answered 
                and the insights we hope to learn.</p>

                <p className={styles.pluspoint}>+ We surveyed 60 users (primarily within the target demographic) on their 
                outlook on small coffee shops.</p>
                <p className={styles.pluspoint}>+ We interviewed 5 customers and 1 employee at Kini Koffee&apos;s Del Mar location.</p>
            </div>

            <div>
                <h3 className={styles.subsectiontitle}>KEY FINDINGS</h3>
            </div>

            <div>
                <p className={styles.pluspoint}><mark className={styles.mark}>1. Coffee shop aficionados value the scenery and ambiance of a 
                coffee shop just as much as the taste of their coffee.</mark></p>
                <div className={styles.twocolcont}>
                    <div className={styles.twocol}>
                        <Image src="/images/kini-koffee/kini-top3.jpg" width={567} height={270} />
                        <p className={styles.caption}>88.3% of our survey participants responded that they care about the scenery and ambiance of a coffee shop.</p>
                    </div>

                    <div className={styles.twocol}>
                        <p className={styles.quote}><span className={styles.quotations}>&quot;</span>For me, obviously the 
                        location is great and the view is beautiful. Everyone who works here is super nice and it 
                        creates a really nice environment too.<span className={styles.quotations}>&quot;</span></p>
                    </div>
                </div>

                <div className={styles.twocolcont}>
                    <div className={styles.twocol}>
                        <p className={styles.quote}><span className={styles.quotations}>&quot;</span>One - if the drinks are 
                        good and the service - drinks and service would be primary, and then the atmosphere, like 
                        this [points at ocean] definitely is the icing on the cake.<span className={styles.quotations}>&quot;</span></p>
                    </div>

                    <div className={styles.twocol}>
                        <p className={styles.quote}>→ 4 out of the 5 customers 
                        we interviewed talked about how they really appreciated the atmosphere that they can get 
                        from Kini Koffee (ambiance)</p>
                    </div>
                </div>
            </div>

            <br/>

            <div>
                <p className={styles.pluspoint}><mark className={styles.mark}>2. Customers of Kini Koffee love the taste of 
                the shop&apos;s specialty drinks.</mark></p>
                <div className={styles.twocolcont}>
                    <div className={styles.twocol}>
                        <p className={styles.quote}>→ All 5 interviewed customers enjoyed one of Kini Koffee&apos;s featured, 
                        specialty drinks (not a regular coffee).</p>
                    </div>

                    <div className={styles.twocol}>
                        <p className={styles.quote}>→ 73.3% of people mentioned that the taste of the coffee is one of 
                        the top three things they value most about small coffee shops.</p>
                    </div>
                </div>
            </div>

            <br/>

            <div>
                <p className={styles.pluspoint}><mark className={styles.mark}>3. Users find out about coffee shops 
                not on websites or social media, but on Google Map and Yelp.</mark></p>
                <div className={styles.twocolcont}>
                    <div className={styles.twocol}>
                        <p className={styles.quote}>→ 38.3% of people usually find coffee shops through Google Maps &amp; 
                        36.7% usually find coffee shops through Yelp.</p>
                    </div>

                    <div className={styles.twocol}>
                        <Image src="/images/kini-koffee/yelp-googlemap.png" width={628} height={264} />
                    </div>
                </div>
            </div>

            <div>
                <h3 className={styles.subsectiontitle}>USER PERSONAS</h3>
            </div>

            <div>
                <div className={styles.twocolcont}>
                    <div className={styles.twocol}>
                        <Image src="/images/kini-koffee/kini-persona1.jpg" width={575} height={566} />
                    </div>

                    <div className={styles.twocol}>
                        <Image src="/images/kini-koffee/kini-persona2.jpg" width={575} height={566} />
                    </div>
                </div>
            </div>

            <div>
                <h3 className={styles.sectiontitle}>FEATURING WHAT?</h3>
                <p className={styles.sectiontext}>We needed to narrow down the essential features we wanted to showcase on 
                Kini Koffee&apos;s website. To do so, we had users do a Feature Sorting exercise where they would sort
                features usually seen in a coffee shop website into 4 categories in a given scenario (2 total).</p>   

                <div className={styles.twocolcont}>
                    <div className={styles.twocol}>
                        <Image src="/images/kini-koffee/feature-sorting-empty.jpg" width={582} height={424} />
                        
                    </div>

                    <div className={styles.twocol}>
                        <p className={styles.categoriesmain}>4 Categories</p>
                        <p className={styles.categories}>1. Things I want to know right away.</p>
                        <p className={styles.categories}>2. Things that are nice to have, but not my priority.</p>
                        <p className={styles.categories}>3. Things I wouldn&apos;t go to a store&apos;s website for</p>
                        <p className={styles.categories}>4. Things I would disregard even if I saw it</p>
                    </div>
                </div> 

                <br/>
                <br/>

                <div className={styles.twocolcont}>
                    <div className={styles.twocol}>
                        <p className={styles.categoriesmain}>Keeping in mind from our survey that:</p>
                        <p className={styles.categories}>+ 31.7% of users would try to find the menu first.</p>
                        <p className={styles.categories}>+ 32% of users would try to find pictures second.</p>
                        <p className={styles.categories}>+ 30% of users would try to find the store location first.</p>
                    </div>

                    <div className={styles.twocol}>
                        <Image src="/images/kini-koffee/feature-sorting-example.jpg" width={694} height={394} />
                    </div>
                </div> 
            </div>

            <div>
                <h3 className={styles.subsectiontitle}>KEY FINDINGS</h3>
                <p className={styles.pluspoint}><mark className={styles.mark}>1. 4/7 users said pictures of the location 
                would be nice to have on the website.</mark></p>
                <p className={styles.pluspoint}><mark className={styles.mark}>2. 6/7 users said item prices were things 
                they want to know right away</mark></p>
                <p className={styles.pluspoint}><mark className={styles.mark}>3. Users find out about coffee shops 
                not on websites or social media, but on Google Map and Yelp.v</mark></p>
            </div>

            <div>
                <p className={styles.sectiontext}>Alongside the logistical information of Kini Koffee&apos;s stores, 
                we needed to make sure to show off Kini Koffee&apos;s strongest points, such as its scenery and location, 
                as well as emphasize their unique drinks, so people are motivated to visit the store and spend time there.</p>    
            </div>

            <div>
                <h3 className={styles.sectiontitle}>USABILITY TESTING</h3>
                <p className={styles.sectiontext}>Pulling from our research and interviews, we developed 2 wireframe 
                versions that I utilized to conduct an A/B Testing session with 3 users. Each user had to engage with 
                both wireframes given our task list and had to answer prototype-specific questions. This was used to 
                understand the information architecture and navigation that felt more usable and comfortable to users.</p>    
            </div>

            <div>
                <h3 className={styles.subsectiontitle}>EXAMPLES</h3>

                <div className={styles.twocolcont}>
                    <div className={styles.twocol}>
                        <p className={styles.examplesdescription}>On the <span className={styles.bolded}>location page</span>, find the store hours for the drive-thru 
                        location [Prototype A and Prototype B]</p>
                        <p className={styles.examplesdescription}>→ Given our team didn&apos;t know there was a 2nd location until 2 
                        weeks of researching Kini Koffee incessantly, it was important to highlight Kini Koffee&apos;s drive-thru location and figure out which 
                        layout allows users to easily differentiate the two locations in order to find the appropriate 
                        store hours, especially since 6/7 users said store hours are things they want to know right away.</p>
                    </div>

                    <div className={styles.twocol}>
                        <p className={styles.examplesdescription}>On the <span className={styles.bolded}>menu page</span>, find a drink you think you&apos;d like and decide
                        on an add-on or change you would like to make to the drink [Prototype A and Prototype B]</p>
                        <p className={styles.examplesdescription}>→ Given that Kini Koffee&apos;s specialty drinks draw many customers 
                        back to the store, it is vital that users are able to quickly find and access these menu items, 
                        especially prices, since 6/7 users said item prices are things they want to know right away.
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.buttoncontainer}>
                <a href="https://docs.google.com/document/d/1a56og2KegNk7R8Mj9RijF6tQFf_0ZDZ1uOxU8_Jae8Y/edit?usp=sharing" className={styles.sitebutton} target="_blank" rel="noreferrer">INTERVIEW GUIDELINES</a>
            </div>

            <div>
                <h3 className={styles.subsectiontitle}>KEY FINDINGS</h3>
                <p className={styles.pluspoint}><mark className={styles.mark}>1. Social media isn&apos;t a priority but adds legitimacy to the site and business.</mark></p>
                <p className={styles.pluspoint}><mark className={styles.mark}>2. Users had difficulty navigating back 
                to the homepage.</mark></p>
                <p className={styles.pluspoint}><mark className={styles.mark}>3. Users won&apos;t trust selected/curated 
                content because it doesn&apos;t show honest customer feedback → Prefer Google Maps or Yelp to view honest reviews.
                </mark></p>
                <p className={styles.pluspoint}><mark className={styles.mark}>4. Career opportunities were not easily discoverable → Design pattern used to showcase 
                careers needed revisions.</mark></p>
            </div>

            <div>
                <h3 className={styles.sectiontitle}>ANALYSIS &amp; SYNTHESIS</h3>
                <p className={styles.sectiontext}>Alongside a synthesis of the feaure sorting exercise, I grouped each 
                user&apos;s feedback on each prototype into the categories of suggestions, expectations, likes, and confusions, 
                which helped us determine the features from each prototype we want to implement into the final prototype, 
                and any additional features we want to add.</p>    
            </div>

            <div>
                <h3 className={styles.subsectiontitle}>EXAMPLES</h3>
                <div className={styles.twocolcont}>
                    <div className={styles.twocol}>
                        <Image src="/images/kini-koffee/expectations-A.jpg" width={595} height={455} />
                    </div>

                    <div className={styles.twocol}>
                        <Image src="/images/kini-koffee/likes-B.jpg" width={643} height={410} />
                    </div>
                </div>

                <br/>
                <br/>

                <div className={styles.twocolcont}>
                    <div className={styles.twocol}>
                        <Image src="/images/kini-koffee/likes-A.jpg" width={595} height={392} />
                    </div>

                    <div className={styles.twocol}>
                        <Image src="/images/kini-koffee/suggestions-B.jpg" width={616} height={453} />
                    </div>
                </div>
            </div>

            <div>
                <h3 className={styles.subsectiontitle}>FINDINGS</h3>
                <p className={styles.pluspointunbolded}>+ Prototype B&apos;s menu is better for finding prices and drink info, and also shows 
                Kini Koffee&apos;s specialization in drinks.</p>
                <p className={styles.pluspointunbolded}>+ Prototype A&apos;s menu is more visually exciting and engaging with pictures of the drinks, but needs prices on the menu..</p>
                <p className={styles.pluspointunbolded}>+ Prototype A has too much blank space and images which 
                detracts from user experience (too much scrolling as well).</p>
                <p className={styles.pluspointunbolded}>+ The smaller text in Prototype A to display important 
                information may dissuade users from reading through it.</p>
                <p className={styles.pluspointunbolded}>+ Displaying speciality drinks in Prototype A&apos;s 
                homepage is engaging and fun.</p>
                <p className={styles.pluspointunbolded}>+ Prototype B has more clarity and is easier to access 
                information such as directions and locations.</p>
                <p className={styles.pluspointunbolded}>+ Menu and Online Ordering are showcased well in both 
                prototypes (primary reasons for using the site).</p>
            </div>

            {/* horizontal linebreak */}
            <hr className={styles.breakline} />

            <div>
                <h3 className={styles.sectiontitle}>REFLECTION</h3>  
                <p className={styles.pluspoint}>+ Working with an actual stakeholder is so much more different 
                than working on a school project. Collaboration, communication, and compromise with the client 
                is of utmost importance.</p>
                <p className={styles.pluspoint}>+ The design process is very nuanced, and changes with each team 
                and project you work with.</p>
                <p className={styles.pluspoint}>+ UX Research is the foundation of the design process. It&apos;s 
                easy to stray off track during the design process and start designing for the &ldquo;wrong&rdquo;
                problem without conducting UX Research prior. Research guides our design decisions and allows us to 
                approach the problem intuitively and effectively based on both our client and customer needs.</p>
                <p className={styles.pluspoint}>+ Analysis and Synthesis of your research data is very, very important. 
                How can we utilize this information to guide us towards our designs and redesigns?</p>
            </div>

            <div>
                <h3 className={styles.subsectiontitle}>THANK YOU TO:</h3>
                <p className={styles.sectiontext}>Our Mentors: Jennie Yoon, Lily Konings, &amp; Bryant Lim</p>
                <p className={styles.sectiontext}>Jewell, our client who kept us well-caffeinated with Kini Koffee&apos;s delicious drinks</p>
                <p className={styles.sectiontext}>Power Up, for putting together this opportunity!</p>
            </div>

            <div className={styles.backbutton}>
                <Link href="/">BACK</Link>
            </div>

        </div>
    );
}