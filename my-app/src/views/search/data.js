export const data = [
  {
    code: "ENG1014",
    state: 1,
    "credit points": "6",
    name: "Engineering numerical analysis",
    overview:
      "This unit introduces computing fundamentals in the context of dynamical systems. Programming structures including arrays, loops, conditional statements, and functions will be presented through the MATLAB environment. This use of MATLAB will initially focus on the analysis of physical systems involving linear and rotational motions that can be solved analytically. These systems will be analysed via kinematic, kinetic, and energy-based methods. The unit will then examine a wider range of complex engineering and dynamical systems that do not exhibit analytical solutions. Problems related to these systems will be solved using numerical methods for linear regression, root-finding, integration, ordinary differential equations, and systems of linear equations. The underlying assumptions and uncertainties associated with the models and numerical methods will be emphasised.",
    unit_details: {
      offerings: {
        "NOV12-CLAYTON-ON-CAMPUS": {
          location: ["Clayton"],
          teaching_period: "November teaching period",
          Attendance_mode: ["On-campus"],
        },
        "S1-01-CLAYTON-ON-CAMPUS": {
          location: ["Clayton"],
          teaching_period: "First semester",
          Attendance_mode: ["On-campus"],
        },
        "S2-01-CLAYTON-ON-CAMPUS": {
          location: ["Clayton"],
          teaching_period: "Second semester",
          Attendance_mode: ["On-campus"],
        },
      },
      prerequisite: {
        OR: [],
        AND: [],
      },
      prohibition: {
        OR: [],
        AND: ["ENG1060"],
      },
      corequisite: {
        OR: [""],
        AND: ["ENG1005"],
      },
      rules:
        "PREREQUISITES: Australian VCE Mathematical methods (Units 3 & 4) or VCE Specialist mathematics (Units 3 & 4) or equivalent AND Australian VCE Physics (Units 3 & 4) or equivalent (Recommended). CO-REQUISITE: You must be enrolled in the Bachelor of Engineering (Honours) or an engineering double degree or with permission from the Faculty of Engineering.",
    },
    id: 1,
  },
];
