import { logDOM } from "@testing-library/react";
import { combineReducers } from "redux";

let dataState = [
  {
    code: "ENG1013",
    state: 1,
    "credit points": "6",
    name: "Engineering smart sysyems",
    overview:
      "Smart systems are critical to the future of engineering. This unit will introduce the fundamentals required for these systems from the perspective of software, electrical, electronic and mechatronics engineering. Theory underpinning systems approach, analogue and digital circuit design and Python programming will be presented. The fundamental stages in the software and hardware development life cycle will be introduced, including requirements analysis, functional analysis, design integration and verification. Concepts such as Boolean Logic, Ohms and Kirchhoffs Laws, Nodal Analysis and Thevenin Equivalence will also be introduced. These will be used to analyse and design solutions that contain electrical components including capacitors, semiconductor devices such as diodes, transistors and basic microcontrollers. The contribution of each topic to a contemporary engineering application will be demonstrated. These concepts will be practised through hands-on projects carried out in teams. Communication and teamwork skills will be developed through team-based tasks.",
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
        AND: ["ENG1002", "ENG1003"],
      },
      corequisite: {
        OR: [],
        AND: [],
      },
      rules:
        "PREREQUISITES: Australian VCE Mathematical methods (Units 3 & 4) or VCE Specialist mathematics (Units 3 & 4) or equivalent AND Australian VCE Physics (Units 3 & 4) or equivalent (Recommended). CO-REQUISITE: You must be enrolled in the Bachelor of Engineering (Honours) or an engineering double degree or with permission from the Faculty of Engineering.",
    },
    id: 1,
  },
  {
    code: "ENG1005",
    state: 1,
    "credit points": "6",
    name: "Engineering mathematics",
    overview:
      "This unit introduces foundational mathematical concepts required for all disciplines of engineering and assumes that you have prerequisite knowledge equivalent to Victorian Certificate of Education (VCE) Specialist Mathematics or ENG1090 Foundation Mathematics. Major concepts taught using engineering contexts include linear algebra, calculus and ordinary differential equations. Specific topics include vector algebra, linear systems of equations, matrix algebra, eigenvalues and eigenvectors, sequences and series in single and higher dimensions, multivariate functions, critical points and first and second order linear ordinary differential equations.",
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
        OR: ["MTH1030", "MTH1035"],
        AND: [],
      },
      corequisite: {
        OR: [],
      },
      rules:
        "Prerequisite: You must have passed ENG1090 or VCE Specialist Mathematics Units 3 and 4 with a raw study score of at least 30 (or an equivalent qualification and score). If you enrol in this unit and do not meet one of these prerequisites you will be discontinued.",
    },
    id: 2,
  },
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
    id: 3,
  },
  {
    code: " ",
    state: 2,
    id: 4,
  },
  {
    code: "ENG1011",
    state: 1,
    "credit points": "6",
    name: "Engineering methods",
    overview:
      "This unit develops methods for analysing complex problems. The basics of statics and material properties are introduced and used to analyse structures such as beams, cantilevers and truss sections. This knowledge is used to design, analyse, build and test a structural component. Simplifications are implicit in the methods used in this analysis. These simplifications will be examined carefully and scrutinised in a broader cross-disciplinary context through problems related to the system being designed. The methods considered will include: the use of simplifications, assumptions, constraints, boundary conditions and levels of required precision. The outcome of the structural analysis and testing will be compared and the suitability of the simplifications used will be scrutinised. You will gain knowledge about the methods engineers use to address complex problems across disciplines. Alongside this “engineering thinking”, you will also gain insight into the role of different specialisations of engineering in society. Communication and teamwork skills will be developed through teamwork tasks.",
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
        AND: ["ENG1001"],
      },
      corequisite: {
        OR: [],
        AND: [],
      },
      rules:
        "PREREQUISITES: Australian VCE Mathematical methods (Units 3 & 4) or VCE Specialist mathematics (Units 3 & 4) or equivalent AND Australian VCE Physics (Units 3 & 4) or equivalent (Recommended). CO-REQUISITE: You must be enrolled in the Bachelor of Engineering (Honours) or an engineering double degree or with permission from the Faculty of Engineering.",
    },
    id: 5,
  },
  {
    code: "ENG1012",
    state: 1,
    "credit points": "6",
    name: "Engineering design",
    overview:
      "This unit covers the engineering design process, which is a method used by engineers from all disciplines to determine a solution to a problem or address a need. You will use design thinking models to define the problem, create innovative conceptual designs, prototype possible design solutions, refine several designs to a single final design, and determine the specifications of the final design. In order to simulate a real-world experience, you are required to determine the role of the stakeholders in the project, and consider the economic, environmental, Indigenous, social and ethical aspects of your proposal. You will be working in a team throughout the semester to gain the communication skills which are highly desired by industries. You will be required to reflect on your work to help improve your interpersonal and teamwork skills contributing to your personal growth. You will also consider the value of engineering ethics and the Code of Ethics whilst learning the engineering design process. Engineers need to submit proposals and pitch their ideas to stakeholders within communities and their team members. They will give presentations to their peers, to their project managers, and to possible stakeholders to develop these presentation skills. On completion of this unit, you should be able to participate in multidisciplinary conversations about the engineering design process.",
    unit_details: {
      offerings: {
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
        AND: ["ENG1002"],
      },
      corequisite: {
        OR: [],
      },
      rules:
        "PREREQUISITES: Australian VCE Mathematical methods (Units 3 & 4) or VCE Specialist mathematics (Units 3 & 4) or equivalent AND Australian VCE Physics (Units 3 & 4) or equivalent (Recommended). CO-REQUISITE: You must be enrolled in the Bachelor of Engineering (Honours) or an engineering double degree or with permission from the Faculty of Engineering.",
    },
    id: 6,
  },
  {
    code: " ",
    state: 2,
    id: 7,
  },
  {
    code: " ",
    state: 2,
    id: 8,
  },
  {
    code: "MEC2402",
    state: 1,
    "credit points": "6",
    name: "Design methods",
    unit_details: {
      overview:
        "Overview This unit will help you to develop a systematic method of capturing design requirements, tools for ideation, estimation and decision-making. Primary and secondary manufacturing processes, assembly techniques. Engineering graphics for problem-solving, manufacturing communication and ideation. Report writing, teamwork in solving design problems involving the integration of mechanical elements in prototype … For more content click the Read More button below.This unit will help you to develop a systematic method of capturing design requirements, tools for ideation, estimation and decision-making. Primary and secondary manufacturing processes, assembly techniques. Engineering graphics for problem-solving, manufacturing communication and ideation. Report writing, teamwork in solving design problems involving the integration of mechanical elements in prototype conception, construction and testing.Read More about Overview",
      offerings: {
        "S1-01-CLAYTON-ON-CAMPUS": {
          location: ["Clayton"],
          teaching_period: "First semester",
          Attendance_mode: ["On-campus"],
        },
        "S1-01-MALAYSIA-ON-CAMPUS": {
          location: ["Malaysia"],
          teaching_period: "First semester",
          Attendance_mode: ["On-campus"],
        },
      },
      prerequisite: {
        OR: [],
        AND: [],
      },
      prohibition: {
        OR: [],
        AND: ["MAE2412"],
      },
      rules:
        "Prerequisite: 12 engineering credit points at level 1\nE6011 Master of Professional Engineering - You are exempt from the prerequisite rule if you are enrolled in this course. ",
    },
    id: 9,
  },
  {
    code: "MEC2403",
    state: 1,
    "credit points": "6",
    name: "Mechanics of materials",
    unit_details: {
      overview:
        "Overview The unit conveys the fundamental knowledge necessary for the analysis and design of mechanical engineering structures. It builds on aspects of applied forces and basic structural analysis that are contained in various units in level 1. It provides a focus for this prior learning with respect to the analysis of … For more content click the Read More button below.The unit conveys the fundamental knowledge necessary for the analysis and design of mechanical engineering structures. It builds on aspects of applied forces and basic structural analysis that are contained in various units in level 1. It provides a focus for this prior learning with respect to the analysis of components and structures within a mechanical engineering context.Read More about Overview",
      offerings: {
        "S1-01-CLAYTON-ON-CAMPUS": {
          location: ["Clayton"],
          teaching_period: "First semester",
          Attendance_mode: ["On-campus"],
        },
        "S1-01-MALAYSIA-ON-CAMPUS": {
          location: ["Malaysia"],
          teaching_period: "First semester",
          Attendance_mode: ["On-campus"],
        },
      },
      prerequisite: {
        OR: ["ENG1011", "ENG1001"],
        AND: [],
      },
      prohibition: {
        OR: ["MAE2401", "MEC3601"],
        AND: [],
      },
      rules:
        "E6011 Master of Professional Engineering - You are exempt from the prerequisite rule if you are enrolled in this course. ",
    },
    id: 10,
  },
  {
    code: "ENG2005",
    state: 1,
    "credit points": "6",
    name: "Advanced engineering mathematics",
    unit_details: {
      overview:
        "Overview This unit introduces advanced mathematical concepts required for all disciplines of engineering that extend on the concepts in ENG1005 Engineering mathematics.\nMajor concepts taught using engineering contexts include multivariable and vector calculus, Fourier series and partial differential equations. Specific topics include partial derivatives, double and triple integrals with change of … For more content click the Read More button below.This unit introduces advanced mathematical concepts required for all disciplines of engineering that extend on the concepts in ENG1005 Engineering mathematics.\nMajor concepts taught using engineering contexts include multivariable and vector calculus, Fourier series and partial differential equations. Specific topics include partial derivatives, double and triple integrals with change of coordinates, vector functions and operators, parametric curves and surfaces, periodic functions, Laplace transforms, ODE boundary value problems, partial differential equation solution techniques and applications.Read More about Overview",
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
        "S1-01-MALAYSIA-ON-CAMPUS": {
          location: ["Malaysia"],
          teaching_period: "First semester",
          Attendance_mode: ["On-campus"],
        },
        "S2-01-CLAYTON-ON-CAMPUS": {
          location: ["Clayton"],
          teaching_period: "Second semester",
          Attendance_mode: ["On-campus"],
        },
        "S2-01-MALAYSIA-ON-CAMPUS": {
          location: ["Malaysia"],
          teaching_period: "Second semester",
          Attendance_mode: ["On-campus"],
        },
      },
      prerequisite: {
        OR: ["ENG1014", "ENG1060"],
        AND: ["ENG1005"],
      },
      prohibition: {
        OR: ["MTH2010", "MTH2015"],
        AND: [],
      },
      rules: null,
    },
    id: 11,
  },
  {
    code: " ",
    state: 2,
    id: 12,
  },
  {
    code: "MAE2402",
    state: 1,
    "credit points": "6",
    name: "Thermodynamics and gas dynamics",
    unit_details: {
      overview:
        "Overview This unit provides the discipline basis for applications in energy and power. It is the core unit in the discipline of thermal sciences, providing a basic level of knowledge and problem-solving capability in thermodynamics and gas dynamics. Thermodynamics underpins the study of aerospace propulsion and thermal systems and is also … For more content click the Read More button below.This unit provides the discipline basis for applications in energy and power. It is the core unit in the discipline of thermal sciences, providing a basic level of knowledge and problem-solving capability in thermodynamics and gas dynamics. Thermodynamics underpins the study of aerospace propulsion and thermal systems and is also a key component of understanding compressible gas dynamic systems. The study of gas dynamics is relevant to high-speed flight, high-thrust propulsion, spaceflight and re-entry. Thus, the unit is core to understanding both aerodynamics and propulsion systems.Read More about Overview",
      offerings: {
        "S2-01-CLAYTON-ON-CAMPUS": {
          location: ["Clayton"],
          teaching_period: "Second semester",
          Attendance_mode: ["On-campus"],
        },
      },
      prerequisite: {
        OR: [],
        AND: ["ENG1005"],
      },
      prohibition: {
        OR: [],
        AND: ["MEC2405", "CHE2164"],
      },
      rules: null,
    },
    id: 13,
  },
  {
    code: "MAE2404",
    state: 1,
    "credit points": "6",
    name: "Aerodynamics 1",
    unit_details: {
      overview:
        "Overview This unit develops your physical and analytical understanding of the bases for aerodynamic flows and translates that into the ability to formulate, analyse and solve aerodynamic problems. It covers an introduction to the concept of a fluid and the continuum hypothesis. Definition of aerodynamic variables and coefficients. Introduction and description … For more content click the Read More button below.This unit develops your physical and analytical understanding of the bases for aerodynamic flows and translates that into the ability to formulate, analyse and solve aerodynamic problems. It covers an introduction to the concept of a fluid and the continuum hypothesis. Definition of aerodynamic variables and coefficients. Introduction and description of fluid flow kinematics, and the application of this knowledge to the design and use of pumps, fans and compressors. Introduction of conservation principles and their application to the development of the governing equations for incompressible inviscid aerodynamic flows based on the ideas of control mass and control volume. Development of Bernoulli's equation. Solution of the governing Laplace equation for fundamental potential flows and the application of the principle of superposition to derive the solution of complex aerodynamic flows. Development and application of thin airfoil theory for infinite wings, and lifting line theory for finite wings. Introduction to the panel method for the analyses of general three-dimensional incompressible inviscid flow over twisted and delta wings.Read More about Overview",
      offerings: {
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
        AND: ["MEC2404"],
      },
      rules: null,
    },
    id: 14,
  },
  {
    code: "MAE2505",
    state: 1,
    "credit points": "6",
    name: "Aerospace dynamics",
    unit_details: {
      overview:
        "Overview This unit develops your physical and analytical understanding of concepts of time, space, coordinate systems, particles, rigid bodies, forces, work, energy, mechanical vibration and Newton's Laws of Motion, translating into the ability to formulate and analyse the motion of spacecraft and aircraft under the influence of forces such as lift, … For more content click the Read More button below.This unit develops your physical and analytical understanding of concepts of time, space, coordinate systems, particles, rigid bodies, forces, work, energy, mechanical vibration and Newton's Laws of Motion, translating into the ability to formulate and analyse the motion of spacecraft and aircraft under the influence of forces such as lift, drag, thrust and gravity. You will be taught the fundamentals of kinematics and kinetics of rigid bodies and systems of particles and to carry out dynamic analysis of satellites and orbital spacecraft and aircraft. You will be introduced to properties of the Earth's atmosphere, the forces acting on aircraft and their impact on aircraft performance, resulting in the development of equations for steady level flight, steady climbing and descending flight. This unit is core to understanding the control and manoeuvring of spacecraft and aircraft.Read More about Overview",
      offerings: {
        "S2-01-CLAYTON-ON-CAMPUS": {
          location: ["Clayton"],
          teaching_period: "Second semester",
          Attendance_mode: ["On-campus"],
        },
      },
      prerequisite: {
        OR: ["ENG1011", "ENG1001"],
        AND: ["ENG1005"],
      },
      prohibition: {
        OR: ["MEC2401", "MAE2406"],
        AND: [],
      },
      rules: null,
    },
    id: 15,
  },
  {
    code: " ",
    state: 2,
    id: 16,
  },
  {
    code: "MAE3401",
    state: 1,
    "credit points": "6",
    name: "Aerodynamics 2",
    unit_details: {
      overview:
        "Overview This unit develops further your physical understanding and analytical skills by including the viscous nature of internal and external aerodynamic flows in the formulation and analysis of general aerodynamic problems. Topics include control volume analysis of viscous incompressible flow, channel and pipe flow, boundary layer flow and free shear flows … For more content click the Read More button below.This unit develops further your physical understanding and analytical skills by including the viscous nature of internal and external aerodynamic flows in the formulation and analysis of general aerodynamic problems. Topics include control volume analysis of viscous incompressible flow, channel and pipe flow, boundary layer flow and free shear flows like jets and wakes, including momentum integral analysis, similarity analysis and similarity solutions of these equations as they pertain to wall-bounded and free shear flows and an introduction to turbulence. Convective heat transfer in these laminar and turbulent flows is also considered.Read More about Overview",
      offerings: {
        "S1-01-CLAYTON-ON-CAMPUS": {
          location: ["Clayton"],
          teaching_period: "First semester",
          Attendance_mode: ["On-campus"],
        },
      },
      prerequisite: {
        OR: [],
        AND: ["MAE2402", "MAE2404"],
      },
      prohibition: {
        OR: [],
        AND: ["MEC3451"],
      },
      rules:
        "Prerequisite: And 12 credit points of engineering study at level two ",
    },
    id: 17,
  },
  {
    code: "MAE3404",
    state: 1,
    "credit points": "6",
    name: "Flight vehicle dynamics",
    unit_details: {
      overview:
        "Overview This unit introduces you to the fundamental aspects in flight dynamics. The requirements and associated equations for static equilibrium and trim are developed. Further, these equations are treated to describe longitudinal static stability and lateral static stability. Performance and flying handling will be introduced. The equations of motion of a … For more content click the Read More button below.This unit introduces you to the fundamental aspects in flight dynamics. The requirements and associated equations for static equilibrium and trim are developed. Further, these equations are treated to describe longitudinal static stability and lateral static stability. Performance and flying handling will be introduced. The equations of motion of a rigid vehicle are developed, together with the solution of these and introduction to state space model. The role of small perturbations, aerodynamic force and moment derivatives, aerodynamic control inputs will be established, together with linearised equations. The description of aircraft attitude and Euler angles are presented. The basis and formulations for lateral and longitudinal dynamics and stability will be developed. Control of aircrafts will also be introduced.Read More about Overview",
      offerings: {
        "S1-01-CLAYTON-ON-CAMPUS": {
          location: ["Clayton"],
          teaching_period: "First semester",
          Attendance_mode: ["On-campus"],
        },
      },
      prerequisite: {
        OR: ["MEC2401", "MAE2406", "MAE2405", "MAE2505", "ENG2005"],
        AND: [],
      },
      prohibition: {
        OR: [],
        AND: [],
      },
      rules: null,
    },
    id: 18,
  },
  {
    code: "MEC3456",
    state: 1,
    "credit points": "6",
    name: "Engineering computational analysis",
    unit_details: {
      overview:
        "Overview This unit conveys the fundamentals of numerical analysis techniques for root-finding, interpolation, integration, the solution of ordinary differential equations and data analysis, and Matlab is employed to demonstrate their implementation. The role computers play in both the solution of engineering problems and the acquisition and analysis of data is explored … For more content click the Read More button below.This unit conveys the fundamentals of numerical analysis techniques for root-finding, interpolation, integration, the solution of ordinary differential equations and data analysis, and Matlab is employed to demonstrate their implementation. The role computers play in both the solution of engineering problems and the acquisition and analysis of data is explored through consideration of common partial differential equations in mechanics, and their solution via finite difference, finite volume, and finite element methods.Read More about Overview",
      offerings: {
        "S1-01-CLAYTON-ON-CAMPUS": {
          location: ["Clayton"],
          teaching_period: "First semester",
          Attendance_mode: ["On-campus"],
        },
        "S1-01-MALAYSIA-ON-CAMPUS": {
          location: ["Malaysia"],
          teaching_period: "First semester",
          Attendance_mode: ["On-campus"],
        },
      },
      prerequisite: {
        OR: ["ENG1014", "ENG1060"],
        AND: [],
      },
      prohibition: {
        OR: ["MAE3456", "MAE2403", "MEC2456"],
        AND: [],
      },
      rules:
        "E6011 Master of Professional Engineering - You are exempt from the prerequisite rule if you are enrolled in this course. ",
    },
    id: 19,
  },
  {
    code: " ",
    state: 2,
    id: 20,
  },
  {
    code: "MAE3405",
    state: 1,
    "credit points": "6",
    name: "Aerospace propulsion",
    unit_details: {
      overview:
        "Overview This unit builds on concepts in MAE3401 and relates aircraft and rocket engines to the laws of thermodynamics, various fuel-air power cycles, their real behaviour plus fuel and combustion chemistry. The efficiency and performance of aircraft engines based on electric, piston and gas turbine platforms are examined along with rotor … For more content click the Read More button below.This unit builds on concepts in MAE3401 and relates aircraft and rocket engines to the laws of thermodynamics, various fuel-air power cycles, their real behaviour plus fuel and combustion chemistry. The efficiency and performance of aircraft engines based on electric, piston and gas turbine platforms are examined along with rotor and propeller design for subsonic speed. For jets and turbofan engines, nozzle design for transonic to supersonic speed is covered, as are supersonic engines. The unit concludes with an introduction to rocket motors and their design and performance for both atmospheric and space flight.Read More about Overview",
      offerings: {
        "S2-01-CLAYTON-ON-CAMPUS": {
          location: ["Clayton"],
          teaching_period: "Second semester",
          Attendance_mode: ["On-campus"],
        },
      },
      prerequisite: {
        OR: [],
        AND: ["MAE2402", "MAE3401"],
      },
      prohibition: {
        OR: [],
        AND: [],
      },
      rules: null,
    },
    id: 21,
  },
  {
    code: "MAE3408",
    state: 1,
    "credit points": "6",
    name: "Aerospace control",
    unit_details: {
      overview:
        "Overview This unit commences with the modelling of various dynamic engineering systems, followed by the analysis of their transient and steady-state responses. More sophisticated analytical methods such as root locus and frequency response will be explored and will build the foundation for controller design in the future. Modelling via state-space methods … For more content click the Read More button below.This unit commences with the modelling of various dynamic engineering systems, followed by the analysis of their transient and steady-state responses. More sophisticated analytical methods such as root locus and frequency response will be explored and will build the foundation for controller design in the future. Modelling via state-space methods will also be briefly covered.Read More about Overview",
      offerings: {
        "S2-01-CLAYTON-ON-CAMPUS": {
          location: ["Clayton"],
          teaching_period: "Second semester",
          Attendance_mode: ["On-campus"],
        },
      },
      prerequisite: {
        OR: [],
        AND: ["MAE3404"],
      },
      prohibition: {
        OR: ["TRC3600", "MEC3457"],
        AND: [],
      },
      rules: null,
    },
    id: 22,
  },
  {
    code: "MAE3411",
    state: 1,
    "credit points": "6",
    name: "Aerospace structural mechanics",
    unit_details: {
      overview:
        "Overview This unit aims to develop an understanding of the analytical methodologies used in strength and stiffness assessment of aircraft structures. The unit will develop an understanding of the translation of aerodynamics and ground loading on aircraft wings and fuselage to the overall airframe. An understanding of the concept of structural … For more content click the Read More button below.This unit aims to develop an understanding of the analytical methodologies used in strength and stiffness assessment of aircraft structures. The unit will develop an understanding of the translation of aerodynamics and ground loading on aircraft wings and fuselage to the overall airframe. An understanding of the concept of structural idealisation and constraint will be developed along with real-world limitations. The principles of stressed skin construction will be considered in detail. Fracture mechanics and the role crack growth plays in limiting the airworthiness of aircraft will be considered. The unit will provide you with the tools necessary to design and maintain aerospace structures.Read More about Overview",
      offerings: {
        "S2-01-CLAYTON-ON-CAMPUS": {
          location: ["Clayton"],
          teaching_period: "Second semester",
          Attendance_mode: ["On-campus"],
        },
      },
      prerequisite: {
        OR: ["MAE2401", "MEC2403"],
        AND: [],
      },
      prohibition: {
        OR: ["MAE3407", "MAE4408", "MAE4411"],
        AND: [],
      },
      rules: null,
    },
    id: 23,
  },
  {
    code: " ",
    state: 2,
    id: 24,
  },
  {
    code: "ENG4701",
    state: 1,
    "credit points": "6",
    name: "Final year project A",
    unit_details: {
      overview:
        "Overview The aim of this capstone unit is to provide an opportunity for you to undertake a substantial individual or small group project. Projects undertaken will integrate and build on content from earlier stages of the course. This unit is the first part of a two-unit project.The aim of this capstone unit is to provide an opportunity for you to undertake a substantial individual or small group project. Projects undertaken will integrate and build on content from earlier stages of the course. This unit is the first part of a two-unit project.",
      offerings: {
        "S1-01-CLAYTON-ON-CAMPUS": {
          location: ["Clayton"],
          teaching_period: "First semester",
          Attendance_mode: ["On-campus"],
        },
        "S1-01-MALAYSIA-ON-CAMPUS": {
          location: ["Malaysia"],
          teaching_period: "First semester",
          Attendance_mode: ["On-campus"],
        },
        "S2-01-CLAYTON-ON-CAMPUS": {
          location: ["Clayton"],
          teaching_period: "Second semester",
          Attendance_mode: ["On-campus"],
        },
        "S2-01-MALAYSIA-ON-CAMPUS": {
          location: ["Malaysia"],
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
        AND: [],
      },
      rules:
        "PREREQUISITE: 18 credit points at level three in engineering or FIT-coded study\nCOREQUISITE: ENG0001 (Clayton-based students) ",
    },
    id: 25,
  },
  {
    code: "MAE4416",
    state: 1,
    "credit points": "6",
    name: "Orbital mechanics and spaceflight dynamics",
    unit_details: {
      overview:
        "Overview This unit introduces the core concepts of orbital mechanics and spaceflight dynamics. You will use a vector calculus approach to derive equations of motion for two-body problems. Kepler's Laws will be developed from Newtonian mechanics, and central-force orbits as conic sections demonstrated. Orbits in three dimensions will be considered, and … For more content click the Read More button below.This unit introduces the core concepts of orbital mechanics and spaceflight dynamics. You will use a vector calculus approach to derive equations of motion for two-body problems. Kepler's Laws will be developed from Newtonian mechanics, and central-force orbits as conic sections demonstrated. Orbits in three dimensions will be considered, and orbital position as a function of time. Orbital manoeuvres, including Hohmann and non-Hohmann transfers, phasing manoeuvres and inclination changes will be discussed.  The unit will also cover back-of-the-envelope style interplanetary mission planning using the method of patched conics. Spacecraft and satellite attitude dynamics will be considered in the context of rigid body dynamics.Read More about Overview",
      offerings: {
        "S1-01-CLAYTON-ON-CAMPUS": {
          location: ["Clayton"],
          teaching_period: "First semester",
          Attendance_mode: ["On-campus"],
        },
      },
      prerequisite: {
        OR: ["MAE2505", "MEC2401", "MAE2405"],
        AND: ["MAE3405", "MAE3405"],
      },
      prohibition: {
        OR: [],
        AND: ["MAE2406"],
      },
      rules: null,
    },
    id: 26,
  },
  {
    code: "MEC4404",
    state: 1,
    "credit points": "6",
    name: "Professional practice",
    unit_details: {
      overview:
        "Overview This unit provides you with an understanding of the work environment of a professional engineer addressing topics not covered in other parts of the degree program. It allows you to more effectively use your engineering skills within the context of a business environment and assists you to add value to … For more content click the Read More button below.This unit provides you with an understanding of the work environment of a professional engineer addressing topics not covered in other parts of the degree program. It allows you to more effectively use your engineering skills within the context of a business environment and assists you to add value to the community. You will be encouraged to evaluate problems from a multi-faceted perspective and to articulate your views in writing as well as in discussion. The unit provides a balance between global macro issues likely to influence your future work environment, and more current micro issues likely to confront you in establishing yourself as a professional engineer.Read More about Overview",
      offerings: {
        "S1-01-CLAYTON-ON-CAMPUS": {
          location: ["Clayton"],
          teaching_period: "First semester",
          Attendance_mode: ["On-campus"],
        },
        "S1-01-MALAYSIA-ON-CAMPUS": {
          location: ["Malaysia"],
          teaching_period: "First semester",
          Attendance_mode: ["On-campus"],
        },
      },
      prerequisite: {
        OR: [],
        AND: [],
      },
      prohibition: {
        OR: [],
        AND: ["MAE4404"],
      },
      rules:
        "PREREQUISITE: Completion of 96 credit points in engineering study.\nIf you are currently enrolled in E6013 Master of Applied Engineering, you are exempt from this rule. ",
    },
    id: 27,
  },
  {
    code: " ",
    state: 2,
    id: 28,
  },
  {
    code: "ENG4702",
    state: 1,
    "credit points": "6",
    name: "Final year project B",
    unit_details: {
      overview:
        "Overview This unit is a continuation of ENG4701 Final year project A. The aim of this capstone unit is to provide an opportunity for you to undertake a substantial individual or small group project. Projects undertaken will integrate and build on content from earlier stages of the course.This unit is a continuation of ENG4701 Final year project A. The aim of this capstone unit is to provide an opportunity for you to undertake a substantial individual or small group project. Projects undertaken will integrate and build on content from earlier stages of the course.",
      offerings: {
        "S1-01-CLAYTON-ON-CAMPUS": {
          location: ["Clayton"],
          teaching_period: "First semester",
          Attendance_mode: ["On-campus"],
        },
        "S1-01-MALAYSIA-ON-CAMPUS": {
          location: ["Malaysia"],
          teaching_period: "First semester",
          Attendance_mode: ["On-campus"],
        },
        "S2-01-CLAYTON-ON-CAMPUS": {
          location: ["Clayton"],
          teaching_period: "Second semester",
          Attendance_mode: ["On-campus"],
        },
        "S2-01-MALAYSIA-ON-CAMPUS": {
          location: ["Malaysia"],
          teaching_period: "Second semester",
          Attendance_mode: ["On-campus"],
        },
      },
      prerequisite: {
        OR: [],
        AND: ["ENG4701"],
      },
      prohibition: {
        OR: [],
        AND: [],
      },
      rules: null,
    },
    id: 29,
  },
  {
    code: "MAE4426",
    state: 1,
    "credit points": "6",
    name: "Finite element analysis and composite structures",
    unit_details: {
      overview:
        "Overview Finite element analysis (FEA) in computer-aided design; finite element formulation; first-order and second-order elements; stiffness matrix; integration points and stress recovery; convergence and mesh refinement; FEA of plane stress and plane strain problems; FEA of axisymmetric problems; FEA of nonlinear materials; FEA of contact problems; FEA of large deformation problems; … For more content click the Read More button below.Finite element analysis (FEA) in computer-aided design; finite element formulation; first-order and second-order elements; stiffness matrix; integration points and stress recovery; convergence and mesh refinement; FEA of plane stress and plane strain problems; FEA of axisymmetric problems; FEA of nonlinear materials; FEA of contact problems; FEA of large deformation problems; FEA of dynamic problems; FEA of fracture mechanics. Specific modulus and specific strength; 3D stress and 3D strain tensors; anisotropic elasticity; composite lamina and composite laminate; hygrothermal strain and hygrothermal stress analysis of composite structures; failure theories for a composite lamina; micromechanical analysis of a composite lamina; classical lamination theory for composite laminate, failure analysis of composite laminates, design of composite laminates, finite element analysis of composite materials and structures.Read More about Overview",
      offerings: {
        "S2-01-CLAYTON-ON-CAMPUS": {
          location: ["Clayton"],
          teaching_period: "Second semester",
          Attendance_mode: ["On-campus"],
        },
      },
      prerequisite: {
        OR: [],
        AND: ["MAE3411"],
      },
      prohibition: {
        OR: ["MAE3426", "MEC4426", "MEC4446"],
        AND: [],
      },
      rules: null,
    },
    id: 30,
  },
  {
    code: "MAE4410",
    state: 1,
    "credit points": "6",
    name: "Flight vehicle design",
    unit_details: {
      overview:
        "Overview On completion of this unit, you will have an understanding of the key elements of aircraft performance analysis as used in aerospace vehicle design. A student project, involving the initial design stages of a flight vehicle, will integrate these studies. Various characteristics of aircraft performance and their design implications will … For more content click the Read More button below.On completion of this unit, you will have an understanding of the key elements of aircraft performance analysis as used in aerospace vehicle design. A student project, involving the initial design stages of a flight vehicle, will integrate these studies. Various characteristics of aircraft performance and their design implications will be examined including whole-aircraft drag polar, power plant characterisation, thrust required in level flight, maximum speed estimation, minimum speed and high-lift devices, rate of climb, gliding, range, endurance, accelerated flight, structural limitations on performance, and design for longitudinal and lateral stability. Mission analysis and preliminary weight estimation based on a design concept will be examined together with the aerodynamic synthesis to satisfy performance requirements, power plant selection, overall vehicle layout and balance. Trade-offs as a necessary part of the design will be apparent to you on completion of this unit.Read More about Overview",
      offerings: {
        "S2-01-CLAYTON-ON-CAMPUS": {
          location: ["Clayton"],
          teaching_period: "Second semester",
          Attendance_mode: ["On-campus"],
        },
      },
      prerequisite: {
        OR: [],
        AND: ["MAE3404", "MAE3405"],
      },
      prohibition: {
        OR: ["MAE3402", "ENG4105"],
        AND: [],
      },
      rules: null,
    },
    id: 31,
  },
  {
    code: "MEC3459",
    state: 3,
    "credit points": "6",
    name: "Materials selection for engineering design",
    unit_details: {
      overview:
        "Overview This unit introduces you to materials available for the fabrication of engineering components and structures. You will be instructed on the fundamentals of the role of composition and structure of materials in their mechanical properties that are important for engineering design. You will also learn how the materials with undesirable … For more content click the Read More button below.This unit introduces you to materials available for the fabrication of engineering components and structures. You will be instructed on the fundamentals of the role of composition and structure of materials in their mechanical properties that are important for engineering design. You will also learn how the materials with undesirable microstructure can lead to premature failures, particularly as a result of their interaction with aggressive environment. The knowledge thus developed will provide a basis for advanced learning on a systematic approach to materials selection as well as the methods by which the materials with the desired mechanical properties can be processed. Case studies will be presented to highlight the importance of selecting appropriate materials for engineering design.Read More about Overview",
      offerings: {
        "S1-01-MALAYSIA-ON-CAMPUS": {
          location: ["Malaysia"],
          teaching_period: "First semester",
          Attendance_mode: ["On-campus"],
        },
        "S2-01-CLAYTON-ON-CAMPUS": {
          location: ["Clayton"],
          teaching_period: "Second semester",
          Attendance_mode: ["On-campus"],
        },
        "S2-01-MALAYSIA-ON-CAMPUS": {
          location: ["Malaysia"],
          teaching_period: "Second semester",
          Attendance_mode: ["On-campus"],
        },
      },
      prerequisite: {
        OR: ["MAE2401", "MEC2403", "TRC2201"],
        AND: [],
      },
      prohibition: {
        OR: ["MAE3406", "CHE2167"],
        AND: [],
      },
      rules: null,
    },
    id: 32,
  },
  {
    code: "TRC3000",
    state: 3,
    "credit points": "6",
    name: "Automation project",
    unit_details: {
      overview:
        "Overview You will learn the planning and communication skills required to undertake a group project. An introduction will be given to the evolution of mechatronic technologies, design tools and methodologies, concurrent engineering design support tools, mechatronics design process and requirement interpretation. The acquisition of these skills will be motivated and tested … For more content click the Read More button below.You will learn the planning and communication skills required to undertake a group project. An introduction will be given to the evolution of mechatronic technologies, design tools and methodologies, concurrent engineering design support tools, mechatronics design process and requirement interpretation. The acquisition of these skills will be motivated and tested by applying them in a group project to design and build a mechatronic system. The mechatronic system will be based on a microcontroller together with appropriate mechanical structure, sensors and actuators.Read More about Overview",
      offerings: {
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
        AND: ["TRC4407"],
      },
      rules:
        "PREREQUISITE: Completion of 18 credit points of level 2 engineering study ",
    },
    id: 33,
  },
  {
    code: "TRC3500",
    state: 3,
    "credit points": "6",
    name: "Sensors and artificial perception",
    unit_details: {
      overview:
        "Overview The unit provides an introduction to transducer principles and the background to classify them in terms of performance and characteristics. A range of commonly available sensors are considered. Electronic components and data acquisition/digital signal processing software used in sensor systems are examined. Advanced sensory systems and associated programming techniques are … For more content click the Read More button below.The unit provides an introduction to transducer principles and the background to classify them in terms of performance and characteristics. A range of commonly available sensors are considered. Electronic components and data acquisition/digital signal processing software used in sensor systems are examined. Advanced sensory systems and associated programming techniques are introduced using robotic systems as an example domain.Read More about Overview",
      offerings: {
        "S1-01-CLAYTON-ON-CAMPUS": {
          location: ["Clayton"],
          teaching_period: "First semester",
          Attendance_mode: ["On-campus"],
        },
        "S1-01-MALAYSIA-ON-CAMPUS": {
          location: ["Malaysia"],
          teaching_period: "First semester",
          Attendance_mode: ["On-campus"],
        },
      },
      prerequisite: {
        OR: [],
        AND: [],
      },
      prohibition: {
        OR: [],
        AND: [],
      },
      rules:
        "Prerequisites: (ECE2031 or ECE2131 or ECE2061) and (ECE2071 or FIT1008 or (FIT1029 and FIT1040)) ",
    },
    id: 34,
  },
  {
    code: "ECE4078",
    state: 3,
    "credit points": "6",
    name: "Intelligent robotics",
    unit_details: {
      overview:
        "Overview Intelligent robotics concerns the melding of artificial perception, strategic reasoning and robotic action in potentially unstructured and time-varying environments to fulfil useful physical tasks, whether in industry or for security, healthcare, search and rescue or civil defence etc. This unit covers topics underpinning the above requirements, including sensors, sensor fusion, … For more content click the Read More button below.Intelligent robotics concerns the melding of artificial perception, strategic reasoning and robotic action in potentially unstructured and time-varying environments to fulfil useful physical tasks, whether in industry or for security, healthcare, search and rescue or civil defence etc. This unit covers topics underpinning the above requirements, including sensors, sensor fusion, machine perception, environmental mapping/monitoring, path planning, localisation, mechanisms, artificial intelligence methodologies and application domains.Read More about Overview",
      offerings: {
        "S2-01-CLAYTON-ON-CAMPUS": {
          location: ["Clayton"],
          teaching_period: "Second semester",
          Attendance_mode: ["On-campus"],
        },
        "S2-01-MALAYSIA-ON-CAMPUS": {
          location: ["Malaysia"],
          teaching_period: "Second semester",
          Attendance_mode: ["On-campus"],
        },
      },
      prerequisite: {
        OR: [],
        AND: ["ECE2071"],
      },
      prohibition: {
        OR: [],
        AND: ["ECE5178"],
      },
      rules:
        "PREREQUISITES: Or FIT1002 or TRC2400 or (FIT1029 and FIT1040)\nIf you are currently enrolled in E6013 Master of Applied Engineering, you are exempt from the prerequisite requirement. ",
    },
    id: 35,
  },
  {
    code: "MEC4447",
    state: 3,
    "credit points": "6",
    name: "Computers in fluids and energy",
    unit_details: {
      overview:
        "Overview Computational Fluid Dynamics (CFD) is a well-established analysis, design and optimisation approach for industrial fluid and heat transfer problems. Examples include turbomachinery, vehicle aerodynamics and aeronautics. It is also a powerful research tool and is being increasingly used to answer fundamental questions in a wide range of fields, from astrophysics … For more content click the Read More button below.Computational Fluid Dynamics (CFD) is a well-established analysis, design and optimisation approach for industrial fluid and heat transfer problems. Examples include turbomachinery, vehicle aerodynamics and aeronautics. It is also a powerful research tool and is being increasingly used to answer fundamental questions in a wide range of fields, from astrophysics to nanomaterials. This Unit provides an introduction to this mathematically sophisticated discipline. This involves a review of the equations governing motion and energy of fluids, the mathematical properties of these equations and the relevance of such properties to obtaining numerical solutions. The basics of numerical discretization and solution methods will be discussed. The Unit will also introduce you to using commercial CFD packages in analysing complex industrial problems involving fluids.Read More about Overview",
      offerings: {
        "S1-01-CLAYTON-ON-CAMPUS": {
          location: ["Clayton"],
          teaching_period: "First semester",
          Attendance_mode: ["On-campus"],
        },
      },
      prerequisite: {
        OR: ["ECE3093", "MAE3456", "MEC3456", "MEC3456"],
        AND: [],
      },
      prohibition: {
        OR: [],
        AND: [],
      },
      rules: null,
    },
    id: 36,
  },
  {
    code: "MEC4459",
    state: 3,
    "credit points": "6",
    name: "Wind engineering",
    unit_details: {
      overview:
        "Overview This unit introduces aerodynamic concepts applicable to both wind energy and wind engineering. It conveys the fundamentals of the wind environment, and how the wind interacts with both turbines to generate power, and structures to cause loads.\nThe unit will be conveyed in three sections: the wind environment, wind energy … For more content click the Read More button below.\nWind engineering is a broad field that concerns the manner that the wind resource can be understood and harnessed for the benefit of society, and the need to understand the potentially damaging effects for design purposes, such as wind effects on structures. Examples of wind engineering areas include the effect of wind on structures and their surrounding environment, building ventilation, pollution dispersion, and energy production from wind.\nYou will first develop an understanding of the natural wind environment, which is essential to both the assessment of the performance of wind turbines and the estimation of structural wind loads. The significance of the wind environment to engineering problems, both structural and mechanical, is explored. The section on wind energy aerodynamic considers the science associated with the production of power from the wind. An understanding of the wind resource and the aerodynamics of wind turbines, including turbine performance, analysis methods, wind turbine siting, and blade/component loading will be developed. The wind engineering section is primarily concerned with understanding wind effects on structures, although other wind engineering problems such as pedestrian level winds, pollutions dispersion and wind-generated noise are discussed. The techniques (including wind tunnel and code-based) available to the engineer, when estimating wind loads, are introduced and applied, providing experience in solving practical engineering problems.This unit introduces aerodynamic concepts applicable to both wind energy and wind engineering. It conveys the fundamentals of the wind environment, and how the wind interacts with both turbines to generate power, and structures to cause loads.\nThe unit will be conveyed in three sections: the wind environment, wind energy and wind engineering.\nWind engineering is a broad field that concerns the manner that the wind resource can be understood and harnessed for the benefit of society, and the need to understand the potentially damaging effects for design purposes, such as wind effects on structures. Examples of wind engineering areas include the effect of wind on structures and their surrounding environment, building ventilation, pollution dispersion, and energy production from wind.\nYou will first develop an understanding of the natural wind environment, which is essential to both the assessment of the performance of wind turbines and the estimation of structural wind loads. The significance of the wind environment to engineering problems, both structural and mechanical, is explored. The section on wind energy aerodynamic considers the science associated with the production of power from the wind. An understanding of the wind resource and the aerodynamics of wind turbines, including turbine performance, analysis methods, wind turbine siting, and blade/component loading will be developed. The wind engineering section is primarily concerned with understanding wind effects on structures, although other wind engineering problems such as pedestrian level winds, pollutions dispersion and wind-generated noise are discussed. The techniques (including wind tunnel and code-based) available to the engineer, when estimating wind loads, are introduced and applied, providing experience in solving practical engineering problems.Read More about Overview",
      offerings: {},
      prerequisite: {
        OR: ["CIV2263", "MEC2404", "MAE2404"],
        AND: [],
      },
      prohibition: {
        OR: [],
        AND: [],
      },
      rules: "Prerequisite: And 120 credit points of engineering study. ",
    },
    id: 37,
  },
  {
    code: "MEC5883",
    state: 3,
    "credit points": "6",
    name: "Mechanical systems design",
    unit_details: {
      overview:
        "Overview This unit will emphasise engineering design with a focus on designing a system rather than the individual components of a system. In this way, the unit will integrate mechanical design with material selection, manufacture, and control systems, and the needs of in-service monitoring to optimise system performance. Quality management systems, … For more content click the Read More button below.\nThis unit uses case studies, group work and design projects as key learning methodologies to integrate theoretical knowledge with practical outcomes. You can expect a strong practical focus with extensive use of computer-aided design and analysis software.This unit will emphasise engineering design with a focus on designing a system rather than the individual components of a system. In this way, the unit will integrate mechanical design with material selection, manufacture, and control systems, and the needs of in-service monitoring to optimise system performance. Quality management systems, lean techniques and lifecycle assessment will be applied to the proposed product or service to understand system variability, maximise and maintain value-creation and assess environmental impacts.\nThis unit uses case studies, group work and design projects as key learning methodologies to integrate theoretical knowledge with practical outcomes. You can expect a strong practical focus with extensive use of computer-aided design and analysis software.Read More about Overview",
      offerings: {
        "S1-01-CLAYTON-ON-CAMPUS": {
          location: ["Clayton"],
          teaching_period: "First semester",
          Attendance_mode: ["On-campus"],
        },
      },
      prerequisite: {
        OR: [],
        AND: [],
      },
      prohibition: {
        OR: [],
        AND: [],
      },
      rules:
        "You must be currently enrolled in a master’s course in engineering or related STEM and in a related discipline. The unit assumes that you have the necessary foundational knowledge. ",
    },
    id: 38,
  },
  {
    code: "MEC5884",
    state: 3,
    "credit points": "6",
    name: "Sustainable engineering systems",
    unit_details: {
      overview:
        "Overview Sustainable engineering systems are optimised to use resources in a sustainable way - such that the demand of the systems does not deplete the supply of resources and in fact can contribute to that supply.\nThis unit involves a rethink in the way we engineer. At one level, it can … For more content click the Read More button below.Sustainable engineering systems are optimised to use resources in a sustainable way - such that the demand of the systems does not deplete the supply of resources and in fact can contribute to that supply.\nThis unit involves a rethink in the way we engineer. At one level, it can involve water harvesting, co-generation of power or the use of alternative/renewable power sources but at a more fundamental level, it requires us to design smart, adaptive structures and devices.Read More about Overview",
      offerings: {
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
        AND: [],
      },
      rules:
        "You must be currently enrolled in a master’s course in engineering or related STEM and in a related discipline. The unit assumes that you have the necessary foundational knowledge. ",
    },
    id: 39,
  },
  {
    code: "MEC5881",
    state: 3,
    "credit points": "6",
    name: "Engineering systems performance analysis",
    unit_details: {
      overview:
        "Overview This unit complements systems design. The unit will integrate fundamental concepts in solid and fluid mechanics and dynamics and, in so doing, will highlight the roles they play in determining the performance of an engineering system.\nYou will use advanced computational tools to study how these concepts are crucial to … For more content click the Read More button below.This unit complements systems design. The unit will integrate fundamental concepts in solid and fluid mechanics and dynamics and, in so doing, will highlight the roles they play in determining the performance of an engineering system.\nYou will use advanced computational tools to study how these concepts are crucial to competitive economic performance and to the long-term sustainability of an engineered system.Read More about Overview",
      offerings: {
        "S2-01-CLAYTON-ON-CAMPUS": {
          location: ["Clayton"],
          teaching_period: "Second semester",
          Attendance_mode: ["On-campus"],
        },
        "T3-57-OS-CHI-SEU-ON-CAMPUS": {
          location: ["Suzhou"],
          teaching_period: "Term 3",
          Attendance_mode: ["On-campus"],
        },
      },
      prerequisite: {
        OR: [],
        AND: [],
      },
      prohibition: {
        OR: [],
        AND: [],
      },
      rules:
        "You must be currently enrolled in a master’s course in engineering or related STEM and in a related discipline. The unit assumes that you have the necessary foundational knowledge. ",
    },
    id: 40,
  },
  {
    code: "MEC5882",
    state: 3,
    "credit points": "6",
    name: "Instrumentation, sensing and monitoring",
    unit_details: {
      overview:
        "Overview Advanced instrumentation and sensing necessitate a multi-disciplinary approach in order to monitor engineering systems as diverse as renewable energy, aerospace, buildings, transportation, telecommunications and biomedical devices.\nThe monitoring and assessment techniques are founded on the fundamentals of mechanical engineering, electrical and electronic engineering and information technology.\nThe unit covers the … For more content click the Read More button below.\nData visualisation will also be discussed. The unit will explore frequency of monitoring in relation to the volume of data collected and strategies for data reduction.Advanced instrumentation and sensing necessitate a multi-disciplinary approach in order to monitor engineering systems as diverse as renewable energy, aerospace, buildings, transportation, telecommunications and biomedical devices.\nThe monitoring and assessment techniques are founded on the fundamentals of mechanical engineering, electrical and electronic engineering and information technology.\nThe unit covers the exploration of strategies for efficient instrumentation of engineering assets. You will use a range of sensing technologies to gather real-time information and use industry-standard approaches to data analyses, characterisation, fault assessment and reporting methodologies at various stages of product design and product development.\nData visualisation will also be discussed. The unit will explore frequency of monitoring in relation to the volume of data collected and strategies for data reduction.Read More about Overview",
      offerings: {
        "S1-01-CLAYTON-ON-CAMPUS": {
          location: ["Clayton"],
          teaching_period: "First semester",
          Attendance_mode: ["On-campus"],
        },
      },
      prerequisite: {
        OR: [],
        AND: [],
      },
      prohibition: {
        OR: [],
        AND: [],
      },
      rules:
        "You must be currently enrolled in a master’s course in engineering or related STEM and in a related discipline. The unit assumes that you have the necessary foundational knowledge. ",
    },
    id: 41,
  },
  {
    code: "MEC4407",
    state: 3,
    "credit points": "6",
    name: "Design project",
    unit_details: {
      overview:
        "Overview This unit provides you with the opportunity to work in teams to complete an integrated design project (IDP) which draws upon the knowledge and skills that you have developed throughout the course of your degree. It also includes instruction in the use of design software tools for 3D modelling, assembly, … For more content click the Read More button below.This unit provides you with the opportunity to work in teams to complete an integrated design project (IDP) which draws upon the knowledge and skills that you have developed throughout the course of your degree. It also includes instruction in the use of design software tools for 3D modelling, assembly, finite element analysis (FEA), computational fluid dynamics (CFD) and design optimisation. Societal, health, safety, legal and cultural aspects will also be considered where appropriate.Read More about Overview",
      offerings: {
        "S2-01-CLAYTON-ON-CAMPUS": {
          location: ["Clayton"],
          teaching_period: "Second semester",
          Attendance_mode: ["On-campus"],
        },
        "S2-01-MALAYSIA-ON-CAMPUS": {
          location: ["Malaysia"],
          teaching_period: "Second semester",
          Attendance_mode: ["On-campus"],
        },
      },
      prerequisite: {
        OR: [],
        AND: ["MEC3416"],
      },
      prohibition: {
        OR: ["TRC4407", "ENG4105"],
        AND: [],
      },
      rules: null,
    },
    id: 42,
  },
  {
    code: "TRC4200",
    state: 3,
    "credit points": "6",
    name: "Engineering cyber-physical systems",
    unit_details: {
      overview:
        "Overview The unit aims to impart knowledge, skills, and experience required to prepare graduates for the impending digital transformation driving the convergence of technologies that result in Cyber-Physical Systems (CPS). An introduction will be given to Cyber-Physical Systems (CPS). The evolution of key technologies, transformation to digital chains and the need … For more content click the Read More button below.The unit aims to impart knowledge, skills, and experience required to prepare graduates for the impending digital transformation driving the convergence of technologies that result in Cyber-Physical Systems (CPS). An introduction will be given to Cyber-Physical Systems (CPS). The evolution of key technologies, transformation to digital chains and the need to seamlessly combine organisational and technological issues into a single framework will be discussed. A real-life scenario will be used to motivate you to apply CPS technologies to design and develop Smart Systems in any domain of their specialisation and interest. Using the concept of Learning Factories (LF) - a platform to impart experience-based knowledge - the developed solution will be built and tested as a group project.Read More about Overview",
      offerings: {
        "S1-01-CLAYTON-ON-CAMPUS": {
          location: ["Clayton"],
          teaching_period: "First semester",
          Attendance_mode: ["On-campus"],
        },
        "S1-01-MALAYSIA-ON-CAMPUS": {
          location: ["Malaysia"],
          teaching_period: "First semester",
          Attendance_mode: ["On-campus"],
        },
      },
      prerequisite: {
        OR: ["MEC3457", "MAE3408", "MEC2402", "ECE3091"],
        AND: [],
      },
      prohibition: {
        OR: [],
        AND: [],
      },
      rules:
        "Additional prerequisite:\nCompletion of 96 credit points of engineering study which includes the prerequisite units mentioned. ",
    },
    id: 43,
  },
  {
    code: "MEC3416",
    state: 3,
    "credit points": "6",
    name: "Machine design",
    unit_details: {
      overview:
        "Overview In this integrative level 3 unit, students of mechanical engineering programs are introduced to the design of machine elements covering bearings, shafts, welds, fasteners, gears etc. This leads to an examination of techniques for improving engineering designs based on economic and functional considerations. Geometric and economic tolerancing is further explored. … For more content click the Read More button below.In this integrative level 3 unit, students of mechanical engineering programs are introduced to the design of machine elements covering bearings, shafts, welds, fasteners, gears etc. This leads to an examination of techniques for improving engineering designs based on economic and functional considerations. Geometric and economic tolerancing is further explored. The use of solid modelling software to simulate the behaviour of mechanical devices and produce engineering drawings is introduced. The integration of design skills and related engineering studies is covered through a group exercise to design a mechanical device.Read More about Overview",
      offerings: {
        "S2-01-CLAYTON-ON-CAMPUS": {
          location: ["Clayton"],
          teaching_period: "Second semester",
          Attendance_mode: ["On-campus"],
        },
        "S2-01-MALAYSIA-ON-CAMPUS": {
          location: ["Malaysia"],
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
        AND: [],
      },
      rules:
        "PREREQUISITE: Completion of 18 credit points of level 2 engineering study\nE6011 Master of Professional Engineering - You are exempt from the prerequisite rule if you are enrolled in this course. ",
    },
    id: 44,
  },
  {
    code: "MAE3406",
    state: 3,
    "credit points": "6",
    name: "Aerospace materials",
    unit_details: {
      overview:
        "Overview Lightweight composite materials are used widely in aerospace structures. They include carbon fibre reinforced plastics, glass fibre reinforced plastics, carbon laminates, composite panels, carbon mats and woven fabrics. Honeycomb structures, metal matrix composites, thermal ceramics and advanced materials. Light alloys: aluminium, titanium and magnesium. Thermoset and thermoplastic systems. Manufacture, processing … For more content click the Read More button below.Lightweight composite materials are used widely in aerospace structures. They include carbon fibre reinforced plastics, glass fibre reinforced plastics, carbon laminates, composite panels, carbon mats and woven fabrics. Honeycomb structures, metal matrix composites, thermal ceramics and advanced materials. Light alloys: aluminium, titanium and magnesium. Thermoset and thermoplastic systems. Manufacture, processing and fabrication of aerospace materials. Net shape forming and structure-property relationships. Joining of composites. Properties and selection of aerospace materials. Degradation, failure modes, delaminating, bond failure, environmental and thermal degradation, fatigue and wear.Read More about Overview",
      offerings: {
        "S2-01-CLAYTON-ON-CAMPUS": {
          location: ["Clayton"],
          teaching_period: "Second semester",
          Attendance_mode: ["On-campus"],
        },
      },
      prerequisite: {
        OR: ["MAE2401", "MEC2403", "TRC2201"],
        AND: [],
      },
      prohibition: {
        OR: ["MEC3459", "CHE2167"],
        AND: [],
      },
      rules: null,
    },
    id: 45,
  },
];

function data(preState = dataState, action) {
  let { type, data } = action;
  switch (type) {
    case "UPDATE_VALUE":
      const newState = [...preState];
      newState[data.index] = data.newValue;
      return newState;
    case "SWAP_VALUE":
      const newList = [...preState];
      const swap = newList[data.oldIndex];
      newList[data.oldIndex] = newList[data.newIndex];
      newList[data.newIndex] = swap;
      return newList;
    default:
      return preState;
  }
}

let eventState = {};
function event(preState = eventState, action) {
  let { type, data } = action;
  switch (type) {
    case "item":
      const newData = { ...data };
      return newData;
    default:
      return preState;
  }
}
export default combineReducers({
  data,
  event,
});
