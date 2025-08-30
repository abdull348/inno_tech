const products = [
  {
    id: 1,
    name: 'Micro Centrifuge MC-20R',
    image: '/assets/inno-MC20R.png',
    description: `innoTECH offer a cost efficient high speed and versatile refrigerated centrifuge. Microprocessor control, touch panel, data can be saved automatically, RCF value can be set up directly, durable and easy to use. Brushless converter motor which has high torque and maintenance free. Multistage damping system, Freon free compressor, low noise, stainless steel centrifugal chamber.
Over speed, over temperature, door interlock, imbalance protection, ensures safety. Pre-cooling design for chamber, fast cooling, high efficiency. Can be configured 0.5ml, 1.5ml, 2ml, 5ml, 10ml, 15ml, 50ml and several kinds of adapters, meet different customer's needs.`,
    specs: {
      Model: 'inno-MC-20R',
      Speed: '20000 RPM',
      RCF: '27800 x g',
      Capacity: '4 x 100 ml',
      'Temperature Range': '-20°C to 40°C',
      Dimensions: '610 x 500 x 350',
    },
    table: {
      Model: 'inno-MC-20R',
      Speed: '20000 RPM',
      RCF: '27800 x g',
      'Temperature Range': '-20°C to 40°C',
      Capacity: '4 x 100 ml',
      'Timing Range': '1 ~ 99 min',
      'Temperature Accuracy': '± 2°C',
      'Speed Accuracy': '± 20 RPM',
      Acceleration: '1 ~ 10 Sec',
      Deceleration: '1 ~ 10 Sec',
      Screen: 'LCD color screen',
      Voltage: 'AC 220V, 50/60Hz, 5A',
      'Dimensions(mm)': '610 x 500 x 350',
      'Weight(kg)': 69,
    },
    rotorSpecs: [
      {
        rotor: 'Angle Rotor-1',
        capacity: '12 x 0.5 ml',
        maxSpeed: '20000 RPM',
        maxRCF: '20380 x g',
      },
      {
        rotor: 'Angle Rotor-2',
        capacity: '48 x 0.5 ml',
        maxSpeed: '16000 RPM',
        maxRCF: '21900 x g',
      },
      {
        rotor: 'Angle Rotor-3',
        capacity: '12 x 1.5 ml / 2.0 ml',
        maxSpeed: '20000 RPM',
        maxRCF: '27800 x g',
      },
      {
        rotor: 'Angle Rotor-4',
        capacity: '24 x 1.5 ml / 2.0 ml',
        maxSpeed: '16000 RPM',
        maxRCF: '23800 x g',
      },
      {
        rotor: 'Angle Rotor-5',
        capacity: '30 x 1.5 ml / 2.0 ml',
        maxSpeed: '14000 RPM',
        maxRCF: '20800 x g',
      },
      {
        rotor: 'Angle Rotor-6',
        capacity: '48 x 1.5 ml / 2.0 ml',
        maxSpeed: '14000 RPM',
        maxRCF: '20850 x g',
      },
      {
        rotor: 'Angle Rotor-7',
        capacity: '10 x 5 ml',
        maxSpeed: '16000 RPM',
        maxRCF: '17780 x g',
      },
      {
        rotor: 'Angle Rotor-8',
        capacity: '12 x 10 ml',
        maxSpeed: '15000 RPM',
        maxRCF: '19910 x g',
      },
      {
        rotor: 'Angle Rotor-9',
        capacity: '12 x 15 ml',
        maxSpeed: '13000 RPM',
        maxRCF: '19495 x g',
      },
      {
        rotor: 'Angle Rotor-10',
        capacity: '4 x 50 ml',
        maxSpeed: '14000 RPM',
        maxRCF: '19910 x g',
      },
      {
        rotor: 'Angle Rotor-11',
        capacity: '6 x 50 ml',
        maxSpeed: '13000 RPM',
        maxRCF: '18850 x g',
      },
      {
        rotor: 'Angle Rotor-12',
        capacity: '4 x 100 ml',
        maxSpeed: '11000 RPM',
        maxRCF: '13280 x g',
      },
      {
        rotor: 'PCR Rotor-13',
        capacity: '4 x 8 x 0.2 ml PCR Strip',
        maxSpeed: '14000 RPM',
        maxRCF: '13500 x g',
      },
      {
        rotor: 'Swing Rotor-14',
        capacity: '2 x 2 x 48 (Micro Titration Plate)',
        maxSpeed: '4000 RPM',
        maxRCF: '1505 x g',
      },
    ],
  },
  {
    id: 1,
    name: 'Micro Centrifuge MC-20',
    image: '/assets/inno-MC20R.png',
    description: `innoTECH laboratory refrigerated centrifuge is a high-quality centrifuge with excellent performance for research labs, clinics, biotechnological, industrial, and hospitals. Microprocessor control. Induction motor maintenance free. Messages on the screen indicating the centrifuge and accessoriesstate. RPM/RCF adjustable along the run, Up to 30 programs in-store, countdown start at set RPM /RCF and rotors information on memory.Centrifugation chamber in stainless steel, guard ring around the chamber with manual emergency lid release.`,
    specs: {
      Model: 'inno-MC-20',
      Speed: '20000 RPM',
      RCF: '27800 x g',
      Capacity: '4 x 100 ml',
      'Temperature Range': '-20°C to 40°C',
      Dimensions: '400 x 345 x 340',
    },
    table: {
      Model: 'inno-MC-20',
      Speed: '20000 RPM',
      RCF: '27800 x g',
      'Temperature Range': '-20°C to 40°C',
      Capacity: '4 x 100 ml',
      'Timing Range': '1 ~ 99 min',
      'Temperature Accuracy': '± 2°C',
      'Speed Accuracy': '± 20 RPM',
      Acceleration: '1 ~ 10 Sec',
      Deceleration: '1 ~ 10 Sec',
      Screen: 'LCD display',
      Voltage: 'AC 220V, 50/60Hz, 5A',
      'Dimensions(mm)': '400 x 345 x 340',
      'Weight(kg)': 27.5,
    },
    rotorSpecs: [
      {
        rotor: 'Angle Rotor-1',
        capacity: '12 x 0.5 ml',
        maxSpeed: '20000 RPM',
        maxRCF: '20380 x g',
      },
      {
        rotor: 'Angle Rotor-2',
        capacity: '48 x 0.5 ml',
        maxSpeed: '16000 RPM',
        maxRCF: '21900 x g',
      },
      {
        rotor: 'Angle Rotor-3',
        capacity: '12 x 1.5 ml / 2.0 ml',
        maxSpeed: '20000 RPM',
        maxRCF: '27800 x g',
      },
      {
        rotor: 'Angle Rotor-4',
        capacity: '24 x 1.5 ml / 2.0 ml',
        maxSpeed: '16000 RPM',
        maxRCF: '23800 x g',
      },
      {
        rotor: 'Angle Rotor-5',
        capacity: '30 x 1.5 ml / 2.0 ml',
        maxSpeed: '14000 RPM',
        maxRCF: '20800 x g',
      },
      {
        rotor: 'Angle Rotor-6',
        capacity: '48 x 1.5 ml / 2.0 ml',
        maxSpeed: '14000 RPM',
        maxRCF: '20850 x g',
      },
      {
        rotor: 'Angle Rotor-7',
        capacity: '10 x 5 ml',
        maxSpeed: '16000 RPM',
        maxRCF: '17780 x g',
      },
      {
        rotor: 'Angle Rotor-8',
        capacity: '12 x 10 ml',
        maxSpeed: '15000 RPM',
        maxRCF: '19910 x g',
      },
      {
        rotor: 'Angle Rotor-9',
        capacity: '12 x 15 ml',
        maxSpeed: '13000 RPM',
        maxRCF: '19495 x g',
      },
      {
        rotor: 'Angle Rotor-10',
        capacity: '4 x 50 ml',
        maxSpeed: '14000 RPM',
        maxRCF: '19910 x g',
      },
      {
        rotor: 'Angle Rotor-11',
        capacity: '6 x 50 ml',
        maxSpeed: '13000 RPM',
        maxRCF: '18850 x g',
      },
      {
        rotor: 'Angle Rotor-12',
        capacity: '4 x 100 ml',
        maxSpeed: '11000 RPM',
        maxRCF: '13280 x g',
      },
      {
        rotor: 'PCR Rotor-13',
        capacity: '4 x 8 x 0.2 ml PCR Strip',
        maxSpeed: '14000 RPM',
        maxRCF: '13500 x g',
      },
    ],
  },
  {
    id: 9,
    name: 'Micro Centrifuge MC-16R',
    image: '/assets/inno-MC20R.png',
    description: `innoTECH laboratory refrigerated centrifuge is high quality centrifuge with excellent performance for research labs clinic, 
    biotechnological, industrial and hospitals. Microprocessor control. Induc on motor 
maintenance free. Messages on screen 
indica ng the centrifuge and accessories 
state. RPM/RCF adjustable along the run, Up to 30 programs in store, countdown 
start at set RPM /RCF and rotors informa on on memory. Centrifuga on chamber 
in stainless steel, guard ring around chamber with manual emergency lid release.`,
    specs: {
      Model: 'inno-MC-16R',
      Speed: '16000 RPM',
      Capacity: '12 x 1.5/2.0 mL',
      'Temperature Range': '-20°C to 40°C',
      Dimensions: '350 X 600 X 300',
    },
  },
  {
    id: 2,
    name: 'Micro Centrifuge MC-15',
    image: '/assets/inno-MC15.png',
    description: `innoTECH Microcentrifuge is high quality and low-cost centrifuge with stable performance. LCD display with motor overheating protection function and
 Low sample heating. Automatic imbalance switch-o and locking of the lid provide safe operation. The rotor accepts 1.5 to 2.0ml tubes directly, as well
 as 0.5ml and 0.2ml tubes with optional adapters`,
    specs: {
      Model: 'inno-MC-15',
      Speed: '15000 RPM',
      Capacity: '12 × 1.5 / 2.0 ml',
      'Temperature Range': '-20°C to 40°C',
      Dimensions: '252 x 190 x 140',
    },
  },
  {
    id: 3,
    name: '-86°C Freezer 86690',
    image: '/assets/86-freezer.png',
    description: `innoTECH -86°C Ultra-low temperature freezers are high quality with fast 
updated refrigera on system. These are equipped with interna onal 
refrigera on system, which is high-efficiency and environmental friendly. These 
ultra-low temperature freezers are designed for scien fic research, laboratory 
and medical grade and best for storage of special materials, blood plasma, 
vaccines and biological products. Suitable for use in research ins tu ons, 
industry, hospitals and laboratories.
 These are designed with 7inches LED touch screen display for se ng 
temperature in the range of -40℃ to -86℃ freely with high-precision display of 
0.1℃. Energy saving and environmental friendly which is designed in CFC-free 
mixture. The Ultra-low temperature freezers (inno-86690 and inno-86790) are 
designed with two compressors if one is damaged the other one give back up to 
system.
 These ultra-low temperature freezer enables the audible and visible alarm 
system, including high or low temperature alarm, low ba ery level alarm, sensor 
failure alarm, door open alarm, system failure alarm and power failure alarm`,
    specs: {
      Model: 'inno-86690',
      Speed: 'N/A',
      Capacity: '690 L',
      'Temperature Range': '-40°C to 86°C',
      Dimensions: 'N/A',
    },
  },
  {
    id: 4,
    name: 'Liquid Nitrogen Container C50',
    image: '/assets/liquid-nitrogen-container.png',
    description: `Our liquid nitrogen containers/Dewar’s are widely used in biological engineering and medical 
sanitation for storing the active biological materials. The vessels are applied in the industrial cooled assembling and material's low temperature   
processing.`,
    specs: {
      Model: 'inno-C50',
      Speed: 'N/A',
      Capacity: '50.5 L',
      'Temperature Range': 'N/A',
      Dimensions: 'N/A',
    },
  },
  {
    id: 5,
    name: 'Autoclave Sterilizer AC101',
    image: '/assets/autoclave-sterilizer.png',
    description: `InnoTECH autoclaves are high quality and low
cost autoclaves with stable performance. Easy to 
use, touch key. Fully automa c, no need for 
supervision, small volume and light weight. 
Equipped with electric pressure temperature 
controller, constant voltage and temperature 
can be automa cally kept when the unit reach 
the se ng parameter. Rapid sterilizing only 
requires 4-6 mints.
 The sterilizing drum made of high quality 
stainless steel. Over temperature and over 
pressure self-protec on. Adopted with immersed hea ng, with high hea ng 
efficiency. Self-protec on of water lacking. Automa cally shut off with beep 
reminding a er autoclaving. It is ideal equipment for clinics, scien fic 
research ins tutes and other organiza ons.`,
    specs: {
      Model: 'inno-AC101',
      Speed: 'N/A',
      Capacity: '101 L',
      'Temperature Range': '134°C',
      Dimensions: '545 x 565 x 1255 mm',
    },
  },
  {
    id: 6,
    name: 'Benchtop pH Meter PH18',
    image: '/assets/PH-18P.png',
    description: `6.5-inch LED screen. It supports wireless Bluetooth printing. Auto-recognition of 25 bu ers. Can store 999 sets of data. Built-in microprocessor chips
 which have intelligent functions like automatic calibrations, ATC, clock display, USB output, function setting, and wireless printing.`,
    specs: {
      Model: 'inno-PH18',
      Speed: 'N/A',
      Capacity: 'N/A',
      'Temperature Range': '-05°C to -108°C',
      Dimensions: 'N/A',
    },
  },
  {
    id: 7,
    name: 'Single Beam Spectrophotometer UV-2000',
    image: '/assets/single-beam-spectrophotometer.png',
    description: `UV-VIS  single beam spectrophotometer are high quality and economical system designed for research labs, clinical labs,
 biotechnology labs, medical, food and water testing and industrial labs. Unique optical system with imported receiver to ensure sound
 performance. Adopt 51 microcomputer systems and large capacity for sample holding.
 The latest ARM and long optical system ensure high accuracy and good stability of the instrument. USB port can be used for data
 transfer in excel or other formats. Powerful functions like photometric measurement, quantitative measurements, Kinetics, and
 spectrum scan.`,
    specs: {
      Model: 'inno-UV-2000',
      Speed: 'N/A',
      Capacity: 'N/A',
      'Temperature Range': 'N/A',
      Dimensions: ' 600 x 460 x 210 mm',
    },
  },
  {
    id: 8,
    name: 'Benchtop pH Conductivity DO Meter PCD50',
    image: '/assets/conductivity-meter.png',
    description: `6.5-inch LED screen. It supports wireless Bluetooth prin ng. Auto 
recogni on of 8 conduc vity standard and 25 buffers. Can store 999 
sets of data. Built-in microprocessor chips which have intelligent 
func ons like automa c calibra ons, ATC, clock display, USB output, 
func on se ng and wireless prin ng. Ability to switch among 
conduc vity, TDS, salinity, and conduc vity. Adopt advance 
conduc vity measurements technologies with conduc vity electrode 
k=1, it can meet measuring accuracy of 0.5 µS/cm ~ 200mS/cm. It has 
func on of auto salinity compensa on, ATC, and auto pressure 
compensa on. Polarographic DO electrode.`,
    specs: {
      Model: 'inno-PCD50',
      Speed: 'N/A',
      Capacity: 'N/A',
      'Temperature Range': '0°C to 99°C',
      Dimensions: '235 x 165 x 65 cm',
    },
  },
  {
    id: 10,
    name: 'Autoclave Sterilizer AC51',
    image: '/assets/autoclave-sterilizer.png',
    description: `InnoTECH autoclaves are high quality and low
cost autoclaves with stable performance. Easy to 
use, touch key. Fully automa c, no need for 
supervision, small volume and light weight. 
Equipped with electric pressure temperature 
controller, constant voltage and temperature 
can be automa cally kept when the unit reach 
the se ng parameter. Rapid sterilizing only 
requires 4-6 mints.
 The sterilizing drum made of high quality 
stainless steel. Over temperature and over 
pressure self-protec on. Adopted with immersed hea ng, with high hea ng 
efficiency. Self-protec on of water lacking. Automa cally shut off with beep 
reminding a er autoclaving. It is ideal equipment for clinics, scien fic 
research ins tutes and other organiza ons.`,
    specs: {
      Model: 'inno-AC51',
      Speed: 'N/A',
      Capacity: '51 L',
      'Temperature Range': '134°C',
      Dimensions: '515 x 475 x 1135mm',
    },
  },
  {
    id: 11,
    name: 'Liquid Nitrogen Container C35',
    image: '/assets/liquid-nitrogen-container.png',
    description: `Our liquid nitrogen containers/Dewar’s are widely used in biological engineering and medical 
sanitation for storing the active biological materials. The vessels are applied in the industrial cooled assembling and material's low temperature   
processing.`,
    specs: {
      Model: 'inno-C35',
      Speed: 'N/A',
      Capacity: '35.5 L',
      'Temperature Range': 'N/A',
      Dimensions: 'N/A',
    },
  },
  {
    id: 12,
    name: '-40°C Freezer 40460',
    image: '/assets/40-Freezer.png',
    description: `innoTECH -40°C Low temperature freezers are high quality and low cost 
freezers with stable performance. These are equipped with interna onal 
refrigera on system, which is high-efficiency and environmental friendly. 
The well-developed audible & visual alarm system and built-in door 
gasket is dustproof and easy to clean. 
These low temperature freezers are designed for scien fic research, 
laboratory and medical grade and best for storage of special materials, 
blood plasma, vaccines and biological products. Suitable for use in 
research ins tu ons, industry, hospitals, laboratories, etc. 
The (inno-40470) low temperature freezer is designed with two 
compressors and two chambers, which allows you to control the upper 
chamber and lower chamber independently. The condenser installed on 
the bo om ensures temperature stability and system reliability. The 
high-precision computerized temperature control system ensures an 
adjustable temperature within a range from -20℃ to -40℃ inside the 
cabinet.`,
    specs: {
      Model: 'inno-40460',
      Speed: 'N/A',
      Capacity: '470 L',
      'Temperature Range': '-10°C to 40°C',
      Dimensions: 'N/A',
    },
  },
  {
    id: 13,
    name: 'Double Beam Spectrophotometer DB6500',
    image: '/assets/double-beam-spectrophotometer.png',
    description: `Double beam spectrophotometer are high quality and economical system designed for research labs, clinical labs,
 biotechnology labs, medical, food and water testing and industrial labs. Unique optical system with imported receiver to ensure sound
 performance. Adopt 51 microcomputer systems and large capacity for sample holding.
 The latest ARM and long optical system ensure high accuracy and good stability of the instrument. USB port can be used for data
 transfer in excel or other formats. Powerful functions like photometric measurement, quantitative measurements, Kinetics, and
 spectrum scan.`,
    specs: {
      Model: 'inno-DB6500',
      Speed: 'N/A',
      Capacity: 'N/A',
      'Temperature Range': 'N/A',
      Dimensions: '580 x 470 x 240 mm',
    },
  },
  {
    id: 14,
    name: 'Liquid Nitrogen Container C10',
    image: '/assets/liquid-nitrogen-container.png',
    description: `Our liquid nitrogen containers/Dewar’s are widely used in biological engineering and medical 
sanitation for storing the active biological materials. The vessels are applied in the industrial cooled assembling and material's low temperature   
processing.`,
    specs: {
      Model: 'inno-C10',
      Speed: 'N/A',
      Capacity: '10.5 L',
      'Temperature Range': 'N/A',
      Dimensions: 'N/A',
    },
  },
];

export default products;
