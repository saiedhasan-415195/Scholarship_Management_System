import { View, Text, ScrollView, Button } from 'react-native'
import React from 'react'

const SchInfo = () => {
  return (
    <ScrollView>
    <View style={{paddingTop:20,backgroundColor:'white',paddingLeft:20,paddingRight:20}}>
    <View  style={{marginBottom:20,borderBottomWidth:1,paddingBottom:10,borderColor:'#f3f3f3'}}>
      <Text style={{fontSize:16}}>SCHOLARSHIP NAME</Text>
      <Text>Schwarzman Scholars Program at Beijing University</Text>
    </View>
    <View style={{marginBottom:10}}>
      <Text  style={{fontSize:16}}>DESCRIPTION</Text>
    </View>
    <View style={{marginBottom:20}}>
      <Text style={{marginBottom:5,textDecorationLine:'underline',fontWeight:'500'}}>Brief description:</Text>
      <Text>Designed to prepare the next generationof global leaders, Schwarzman Scholars isthe first scholarship created to respondto the geopolitical landscape of the 21stCentury. The program will give the world'sbest and brightest students the opportunityto develop their leadership skills andprofessional networks through a one-yearMaster's Degree at Tsinghua University inBeijing - one of China's most prestigiousuniversities.</Text>
    </View>
    <View style={{marginBottom:20}}>
      <Text style={{marginBottom:5,textDecorationLine:'underline',fontWeight:'500'}}>Host Institution(s):</Text>
      <Text>Tsinghua University in Beijing, China</Text>
    </View>
    <View style={{marginBottom:20}}>
      <Text style={{marginBottom:5,textDecorationLine:'underline',fontWeight:'500'}}>Level/Fields of study:</Text>
      <Text>Master's Degree and LeadershipProgramme in Global Affairs withconcentrations on one of the followingdisciplines: Public Policy, Economic andBusiness, International Studies
Number of Awards:
Up to 200 students - about 45% of the firstclass will come from the United States, 20%from China, and 35% from the rest of theworld.</Text>
    </View>
    <View style={{marginBottom:20}}>
      <Text style={{marginBottom:5,textDecorationLine:'underline',fontWeight:'500'}}>Target group:</Text>
      <Text>All nationalities</Text>
    </View>
    <View style={{marginBottom:20}}>
      <Text style={{marginBottom:5,textDecorationLine:'underline',fontWeight:'500'}}>Eligibility:</Text>
      <Text>Undergraduate degree or first degree froman accredited college or university or itsequivalent.
Applicants who are currently enrolled inundergraduate degree programs mustbe on track to successfully complete alldegree requirements before August 1 oftheir Schwarzman Scholars enrollment year.There are no requirements for a specificfield of undergraduate study; all fields arewelcome, but it is important for applicants,regardless of undergraduate major, toarticulate how participating in SchwarzmanScholars will help develop their leadershippotential within their field.</Text>
    </View>
    <View style={{marginBottom:20}}>
      <Text style={{marginBottom:5,textDecorationLine:'underline',fontWeight:'500'}}>English language proficiency:</Text>
      <Text>Applicants must demonstrate strongEnglish language skills, as all teaching willbe conducted in English. If the applicant'snative language is not English, officialEnglish proficiency test scores must besubmitted with the application. Acceptabletest options are:
·Test of English as a Foreign Language(TOEFL PBT). Minimum score 600.
·Internet-based Test of English as a ForeignLanguage (TOEFL iBT). Minimum score 100.
·International English Language TestingSystem (IELTS). Minimum score 7.
This requirement is waived for applicantswho graduated from an undergraduateinstitution where the primary languageof instruction was English for at leasttwo years of the applicant's academicprogram. The requirement will also bewaived for applicants who have studied inEnglish for two or more years at a Master'sdegree level or higher.</Text>
    </View>
    <View style={{marginBottom:20}}>
      <Text style={{marginBottom:5,textDecorationLine:'underline',fontWeight:'500'}}>Application instructions:</Text>
      <Text>It is important to visit the official website(Click Apply Now) to access the applicationforms and for detailed information on howto apply for this scholarship.</Text>
    </View>
    </View>
    <View style={{alignContent:'center',flexDirection:'column',alignItems:'center',marginBottom:50}}>
    <Button title='Apply Now'/>
    </View>
    
    </ScrollView>
  )
}

export default SchInfo