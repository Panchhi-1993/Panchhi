import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  childData = [{
    name: `HSC`, year: '2008-2009', schoolName: 'SYN Vidyapith', data: `Completed HSC from SYN Vidyapith UP Board with an aggregate of 77%`
  },
  {
    name: `SSC`, year: '2010-2011', schoolName: 'SYN Vidyapith', data: `Completed SSC from SYN Vidyapith UP Board with an aggregate of 67.4%`
  }, {
    name: `Bachloer of Arts`, year: '2015-2017', schoolName: 'DDU Gorakhpur University', data: `Completed Bachloer of Arts from DDU Gorakhpur Universit with an aggregate of 53.11%`
  }, {
    name: `Master Of Arts`, year: '2020-2021', schoolName: 'DDU Gorakhpur University ', data: `Completed MA with Polatical Science from DDU Gorakhpur University with an aggregate of 61%`
  },
  {
    name: `D.El.Ed`, year: '2017-2019', schoolName: 'SMA Memorial College', data: `Completed D.El.Ed from SMA Memorial College with 89.09 aggregate`
  },
  {
    name: `CTET`, year: '2021', schoolName: '', data: `Qualified both Primary and Elementry from CTET`
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
    {
      name: "Career Progression", id: 'career',
      data: [{
        name: `D.El.Ed`, data: `After Completing my MA I started preparing for D.El.Ed to start my carrier as a teacher. It took sometime but I completed my D.El.Ed with 89%`
      },
      {
        name: `Elementry School`, data:
          "After Completing my D.El.Ed I tought in an elementry school near my house for sometime meanwhile preparing for Ctet to clear Government Exams based on it"
      },
      {
        name: "Ctet and Beyond", data:
          "After Completing my Ctet my complete focus was on to clear government Exam but because of certain circumstances I was not able to persue my ambition. Now again I have been looking into teaching jobs "
      }
      ]
    },
    {
      name: "Academedic Details", id: 'academedic', data: [{
        name: ``, data: ``}]
    },
    {
      name: "Contact Me", id: 'contact', data: [{
        name: `Email`, data: `ps30may@gmail.com`
      },
      {
        name: `Phone Number`, data: "7355135997"
      },
      {
        name: `Freelance Writing`, data: `Available`
      },
      {
        name: `Address`, data: "Hyderabad, India"
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
