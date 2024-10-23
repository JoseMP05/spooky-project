import { stagger } from "motion"

export const sequenceImageLoading = [
  [".overlay",
    {opacity: 1,visibility: "visible"},
    {duration: 0.25, at: 0}
  ],
  ['.costume-form',
    {opacity: 0, visibility: 'hidden'},
    {duration: 0.1, at: 0}
  ],
  ['.examples__title',
    { opacity: 0,
      visibility: 'hidden'},
    {duration: 0.1}
  ],
  [".examples__buttons", 
    { x: -20, opacity: 0, visibility: 'hidden'}, 
    { duration: 0.5, delay: stagger(0.025, {start: 0.1}), at: 0}
  ],
  [".interactive", 
    { minWidth: "0px", maxHeight: "100vh", overflow:"hidden"}, 
    { duration: 0.001,}
  ],
  // ["#appLayout", 
  //   { gridTemplateColumns: "0fr 1fr 0fr" }, 
  //   { duration: 0.5, at: "<"},
  // ],
]

export const secuenceImageLoaded = [
  // ["#appLayout", 
  //   { gridTemplateColumns: "0fr 1fr 1fr" }, 
  //   { duration: 0.5,
  //     ease: "linear"
  //   },
  // ],
  [".share", 
    { minWidth: "auto", width: "100%"}, 
    { duration: 0.001, at:"-0.25"}
  ],
  [".overlay",
    {opacity: 0, 
      visibility: 'hidden'
    },
    {duration: 0.25, at:"<"}
  ],
  [".share section", 
    { display: 'block', opacity: 1, visibility: 'visible'}, 
    { duration: 0.25, at:"<"}
  ]
]