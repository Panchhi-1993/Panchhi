import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  childData = [{
    name: `HSC`, year: '2003-2004', schoolName: 'K V Manauri', data: `Completed HSC from K V Manauri CBSE Board`
  },
  {
    name: `SSC`, year: '2005-2006', schoolName: 'K V Manauri', data: `Completed SSC from K V Manauri CBSE Board`
  }, {
    name: `Bachloer of Arts(English)`, year: '2007-2010', schoolName: 'Gandhi Mahavidayala', data: `Completed Bachloer of Arts from V.B.S PURVANCHEL
    UNIVERSITY`
  }, {
    name: `Master Of Arts(English)`, year: '2014-2015', schoolName: 'P.G.R.R. College', data: `Completed MA with English fro Osmania University`
  },
  {
    name: `B.Ed`, year: '2010-2011', schoolName: 'Presidency college of Education', data: `Completed B.Ed from Osmania University`
  },
 
  ]
  data = [
    {
      name: "Introduction", id: 'introduction',
      data: [{
        name: `Objective`, data: `To begin my teaching 
                career at a well-liked and well-reputed institute/high 
                school and to achieve good progress in my career through 
                all my best subject knowledge and great teaching efforts`}
      ]
    },
    {
      name: "Professional Skills", id: 'professional',
      data: [{
        name: `Professional Qualifications`, list:
          ["8 years of experience in teaching profession as TGT English.",
            "Exceptional communicative and interpersonal skills with well developed personal interaction skills.",
            "Good in organizing and delivering classroom lectures.",
            "Excellent classroom management.",
            "A passion about the teaching field with a great teaching aptitude",
            "Excellent ability to reach to the target students knowledge grasping level and implement appropriate teaching methods and techniques",
            "Thorough knowledge of the subject to be taught and its background.",
            "Great fluency in spoken English and command over comprehension",
            "Knowledge of utilizing all the modern teaching aids appropriately and effectively",
            "Proficiency in handling computer aided tools and the web platform",
            "Uncommon ability to create quick interests among the students about the subject",
            "Knowledge of common student's psychology and high concern regarding the problems they face in the learning process",
            "Follows high standard of personal and work ethics"
          ]
      }]
    },
    {
      name: "Career Progression", id: 'career',
      data: [
      {
        name: `D.S. Memorial Inter College (Ballia)
        `, data:
          "From May 2011 to May 2017"
      },
      {
        name: " St. Paul Inter College Shahjahanpur", data:
        " From June 2019 to May 2020"

      },
      {
        name: " K.V NO.1 CANTT SHAHJHAPUR", data:
        "From April 2021 till now"

      }
      ]
    },
    {
      name: "Academedic Details", id: 'academedic', data: [{
        name: ``, data: ``}]
    },
    {
      name: "Contact Me", id: 'contact', data: [{
        name: `Email`, data: `Pujadivedi24@gmail.com`
      },
      {
        name: `Phone Number`, data: "9919972270"
      },
      {
        name: `Alternate Phone Number`, data: "7398966540"
      },
      
      {
        name: `Address`, data: "Shahjahanpur, U.P., India"
      }
      ]
    },
    {
      name: "Writing Work", id: 'writing', data: [{
        name: `Coming Soon`, data: `Please visit back we will update soon`},
      {
        name: ``, list:
          ["A passion about the teaching field with a great teaching aptitude",
            "Excellent ability to reach to the target students knowledge grasping level and implement appropriate teaching methods and techniques",
            "Thorough knowledge of the subject to be taught and its background.",
            "Great fluency in spoken English and command over comprehension",
            "Knowledge of utilizing all the modern teaching aids appropriately and effectively",
            "Proficiency in handling computer aided tools and the web platform",
            "Uncommon ability to create quick interests among the students about the subject",
            "Knowledge of common student's psychology and high concern regarding the problems they face in the learning process",
            "Follows high standard of personal and work ethics"
          ]
      }]
    },
  ]
  constructor() { }

  ngOnInit(): void {
    console.log("hi")
  }

}
