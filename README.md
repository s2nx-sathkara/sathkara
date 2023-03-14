# Introduction

The Economic Crisis faced by Sri Lanka has severely affected essential services in the country. Sri Lanka lacks foreign currency reserves, and as a result, the government is unable to import essential goods from foreign countries. People have been struggling with daily power cuts and shortages of basics such as fuel and food. It also affected many other essential services like education, industries, tourism, agriculture, and health.
Under such a situation, the limited resources available should be evenly distributed among citizens. Although in reality, many people struggle to secure essential resources while some have abundant resources. This uneven distribution of resources can be partially attributed to the difficulty of finding and connecting buyers and sellers in traditional methods. A modern digital solution can be introduced by incorporating aspects of social networking and crowd-sourcing to bridge the gap between people who are in need and who can provide the needed.

# Problem Identification

Health sector has been affected severely due to the current economic crisis. One of the major issues is the lack of pharmaceuticals. Many patients require regular medications and hundreds of new patients are prescribed medicine daily. 160 out of 383 essential medicines in Sri Lanka are considered in short supply according to the Ministry of Health. Especially uncommon drugs are difficult to find in stock at rural hospitals and pharmacies.
Therefore patients have adapted to different methods to obtain the medicines needed. One such method is to use social media to seek medications on social media. People create social media posts with requests for specific medicines and share them with friends and family in hope of finding someone who has the medicine in stock. Although they can be successful at times, most of them are buried within all other social media posts. Also, the reach of these social media posts are limited by the ones social network size.
Similarly, social media posts are shared requesting blood and organ donorship. These are usually urgent requests due to accidents or critical illness. They face the same issues mentioned above and are also pretty slow to respond to new requests.

# Proposed Solution

Proposed solution to overcome the above problem is to create a dedicated platform that enables patients to find the medicines they need easily and much faster. It aims to connect the patients with parties who can supply medicine. Although the main feature is to assist in finding medicines, the platform can also be used to help patients seeking blood and organ donations.
The platform serves two main users. First, it serves patients who are seeking help to find medicines, Secondly users who are willing to help and provide medicines. 
The proposed platform could be divided into 3 major parts.
Pharmaceuticals
Blood Donations
Organ Donations
Each of the above categories works in a very similar manner, except for the extended verifications in blood and organ categories. 
Pharmaceuticals section,  the process of seeking pharmaceuticals works as follows,
Step 1: The user has to create an account with basic information and contact details to log into the platform.
Step 2: The user should choose the requested category from the main three categories.
Step 3: The user can choose whether to view and help the patients in need of pharmaceuticals or to request the pharmaceuticals needed by them.
Step 4: If the user wants to find a certain medicine he can create a Pharmaceutical Request Post (or we simply refer to it as a post in the platform). A post has a preset to complete before posting publicly to the platform which includes the following, 
Pharmaceutical Name Tag
Brief Description
Urgency
Location
Image of prescription or the medicine (optional)
Step 5: After posting a request post to the platform other users can see it in their request feed. The request feed is being populated with the request posts of all three categories. Users can filter the required category as they prefer. 
Step 6: Assuming a user finds a pharmaceutical request post and he has the requested medicine or he knows where to find the requested medicine, he can contact the poster and let him know about it. For contacting purposes the platform has a chat feature and also third-party contact methods can be used. (which the platform doesn’t account for.)
Step 7: If the poster actually finds the requested pharmaceutical using the information received through the platform he can mark the post as found (It will also add some points to the user who made the correct suggestion). However, if he was unable to find the pharmaceutical before the requested time period, the post will be automatically marked as not found.  

At the end of these 7 steps, a user should be able to have a final result on their pharmaceutical searching process.
When considering the other two categories, namely Blood Donation and Organ Donation. It can also be done in these steps. However, organ donation requests need extra verification. When adding a post under organ category, the user should provide all the necessary documents  certified by relevant authorities and experts. After submitting the relevant documents, the platform administration team runs a strict review of the request and decides whether to add posts to the public feed or remove them.
Other than the above core features, the system would have the following important features.
Advance suggestion system which will be populated by analyzing user behavior to suggest locations where a certain medicine could be found.
Integrated chat to contact users.
Point-based ranking system to identify reliable suggestions. 
Reports on overall platform performance for getting a better understanding of the system


# Technologies Used

Modern development stack would be used to build the platform and it will be hosted by reliable service providers. The overall system including the platform could be divided into three main components and they will be built using appropriate technologies accordingly as follows.
Client Site - React JS (For web), React Native (For mobile)
API - Node JS, Express JS, Azure
Database - Mongo DB
