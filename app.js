const units = [
  {
    id: 1, title: "Office Orientation", topics: ["Office Orientation", "Finding Your Way"], bookPages: "4-7", workbookPages: "4-5",
    intro: "Start with the company structure, departments, job roles and directions around an office building.",
    vocab: [["Chief Executive Officer (CEO)", "the head of the company"], ["Marketing Director", "plans how to sell a product"], ["Financial Director", "manages the company's money"], ["Operations Director", "makes sure that the company's processes are efficient"], ["Human Resources Director", "finds and trains new employees"], ["Sales Representative", "travels to different places to sell products"]],
    reading: { heading: "Welcome to Top-Sport", text: "The company has got four departments: Marketing, Finance, Operations and Human Resources. Each department is headed by a director. The CEO is the head of the company.", question: "Which department is mentioned in the source text?", options: ["Human Resources", "Catering", "Transport", "Tourism"], answer: 0 },
    tf: [["The company has got four departments.", true], ["The Human Resources Director is in charge of the sales teams.", false], ["The CEO is the head of the company.", true]],
    quiz: { q: "Who manages the company's money?", options: ["The Financial Director", "The Sales Representative", "The Head of IT", "The Personnel Manager"], answer: 0 },
    fill: { sentence: "The Human Resources Department is on the ___ floor.", answer: "first" },
    order: "The Human Resources department is on the first floor.",
    listen: { text: "Where do senior managers sit? The CEO, Bruce Carson, is in room 301.", question: "Which room is mentioned?", options: ["Room 301", "Room 103", "Room 204", "Room 411"], answer: 0 },
    writing: { prompt: "Write a short welcome email to a new employee. Describe the company structure and include at least three job roles from this unit.", checklist: ["I used three job roles.", "I described a department or office location.", "I used a professional closing."] }
  },
  {
    id: 2, title: "Office Routines", topics: ["Office Routines", "Purchasing Office Equipment"], bookPages: "8-11", workbookPages: "6-7",
    intro: "Build the language of an administrative assistant: visitors, meetings, mail, supplies and office equipment.",
    vocab: [["conduct desk research", "find information for work"], ["keep a log", "keep a record"], ["screen calls", "check calls before passing them on"], ["schedule a meeting", "arrange a meeting at a time"], ["price per unit", "how much each item costs"], ["quantity discount", "a better price for a larger order"]],
    reading: { heading: "Administrative Assistant", text: "Responsibilities include answering incoming calls, distributing incoming mail, scheduling meetings, typing agendas, taking minutes, preparing presentations and desk research.", question: "Which task is listed in the job advertisement?", options: ["Taking minutes", "Driving a bus", "Cooking lunch", "Designing uniforms"], answer: 0 },
    tf: [["An administrative assistant may schedule meetings.", true], ["A delivery date tells you when you will receive an item.", true], ["A shredder is used to make a presentation.", false]],
    quiz: { q: "What do you use to destroy confidential documents?", options: ["A shredder", "A projector", "A filing cabinet", "A pen drive"], answer: 0 },
    fill: { sentence: "Could you ___ a meeting for tomorrow at 10.30?", answer: "schedule" },
    order: "Could you please take minutes at today's meeting?",
    listen: { text: "Please keep a log of any visitors. You should order new supplies when necessary.", question: "What should the assistant keep?", options: ["A log of visitors", "A list of holidays", "A menu", "A boarding pass"], answer: 0 },
    writing: { prompt: "Write a short message to a junior administrative assistant explaining three tasks for today.", checklist: ["I used three office-routine verbs.", "I made at least one polite request.", "I included office supplies or meetings."] }
  },
  {
    id: 3, title: "Using Voicemail", topics: ["Using Voicemail", "Using the Intranet"], bookPages: "14-17", workbookPages: "8-9",
    intro: "Practise instructions for voicemail and the intranet: PINs, messages, passwords, formatting and tags.",
    vocab: [["outgoing message", "what a caller hears when they reach voicemail"], ["incoming message", "a recording someone leaves for you"], ["fast forward", "go to a later part of a recording"], ["rewind", "go to an earlier part of a recording"], ["retrieve", "get a message"], ["password", "a secret code"]],
    reading: { heading: "New voicemail service", text: "The new voicemail service lets employees retrieve, replay, save and delete messages. Each employee gets a personal PIN.", question: "What does each employee get?", options: ["A personal PIN", "A new laptop", "A paper invoice", "A room key"], answer: 0 },
    tf: [["A PIN is a personal identification number.", true], ["Employees should share their intranet password with colleagues.", false], ["A special character is not a letter or a number.", true]],
    quiz: { q: "What should a password include?", options: ["Letters, numbers and special characters", "Only a first name", "Only four numbers", "A company logo"], answer: 0 },
    fill: { sentence: "First, enter your ___ to go to the main voicemail menu.", answer: "PIN" },
    order: "First enter your PIN and then press one.",
    listen: { text: "To listen to your messages, press one. If you want to hear it again, press two.", question: "Which button lets you listen to messages?", options: ["One", "Two", "Nine", "Hash"], answer: 0 },
    writing: { prompt: "Write clear step-by-step instructions for a colleague who is logging into the company intranet.", checklist: ["I used sequence words.", "I included a username and password.", "I included one security warning."] }
  },
  {
    id: 4, title: "Handling Mail", topics: ["Handling Mail", "Using a Courier Service"], bookPages: "18-21", workbookPages: "10-11",
    intro: "Sort, stamp, label and send business mail. Then practise courier language, paperwork and delivery details.",
    vocab: [["sort the mail", "organise mail into groups"], ["stamp", "a mark used for postage"], ["registered post", "a tracked postal service"], ["waybill", "a document used when sending goods"], ["good condition", "not damaged"], ["this way up", "the correct position for a parcel"]],
    reading: { heading: "Mailroom procedure", text: "Before distributing the mail, sort it. Legal documents can be sent by registered post. When a courier collects a parcel, check all the items and the paperwork.", question: "What should you do before distributing the mail?", options: ["Sort it", "Delete it", "Record a voicemail", "Book a hotel"], answer: 0 },
    tf: [["A waybill is used when sending something by courier.", true], ["Bubble wrap is used to track an item.", false], ["A signature is the special way you write your name.", true]],
    quiz: { q: "What label tells you the correct position for a parcel?", options: ["This way up", "Fully booked", "No reply", "High season"], answer: 0 },
    fill: { sentence: "Please send all legal documents by ___ post.", answer: "registered" },
    order: "Please make sure the parcel is in good condition.",
    listen: { text: "The courier is coming at eleven o'clock, so the customer should receive the parcel by twelve.", question: "When is the courier coming?", options: ["At eleven o'clock", "At twelve o'clock", "At nine o'clock", "At two o'clock"], answer: 0 },
    writing: { prompt: "Write a courier instruction containing the delivery time, the condition of the parcel and one label.", checklist: ["I used a delivery phrase.", "I mentioned the parcel condition.", "I used one mail or courier term."] }
  },
  {
    id: 5, title: "Shipping", topics: ["Shipping", "Import and Export"], bookPages: "24-27", workbookPages: "12-13",
    intro: "Follow goods from a port of origin to a port of discharge and discuss import-export choices.",
    vocab: [["cargo", "goods"], ["port of origin", "the place a ship begins its journey"], ["vessel", "a large ship"], ["volume", "the amount of space inside something"], ["port of discharge", "the place a ship is going to"], ["consignee", "the person or company receiving goods"]],
    reading: { heading: "A shipment in transit", text: "The cargo is in the container terminal. The vessel began its journey at the port of origin and will unload at the port of discharge.", question: "What is the cargo?", options: ["Goods", "A password", "A meeting", "An invoice"], answer: 0 },
    tf: [["A vessel is a large ship.", true], ["The port of origin is where a ship begins its journey.", true], ["To unload means to put items onto a ship.", false]],
    quiz: { q: "What does volume describe?", options: ["The amount of space inside something", "The price of a stamp", "The name of a customer", "The time of a meeting"], answer: 0 },
    fill: { sentence: "The ship will ___ the goods at the port of discharge.", answer: "unload" },
    order: "We need our goods to arrive quickly and without damage.",
    listen: { text: "Business is bad at home. Maybe we should look for opportunities in foreign markets.", question: "Where should the company look for opportunities?", options: ["In foreign markets", "In the stockroom", "In the cafeteria", "In the intranet"], answer: 0 },
    writing: { prompt: "Write a short shipping update with the cargo, vessel, port of origin and port of discharge.", checklist: ["I used four shipping terms.", "I explained where the goods are.", "I used a clear business tone."] }
  },
  {
    id: 6, title: "Receiving Calls", topics: ["Receiving Calls", "Following Up on Messages"], bookPages: "28-31", workbookPages: "14-15",
    intro: "Handle calls professionally: create a positive impression, put callers on hold and follow up on messages.",
    vocab: [["put someone on hold", "make a caller wait"], ["transfer a call", "send a call to another person"], ["hang up", "end a call"], ["return a call", "call someone back"], ["get cut off", "lose a phone connection"], ["reach someone", "contact someone"]],
    reading: { heading: "A professional call", text: "Use a friendly tone, speak clearly and create a positive impression. If the line is busy, take a message or return the call as soon as possible.", question: "What tone should you use?", options: ["A friendly tone", "A silent tone", "An angry tone", "A secret tone"], answer: 0 },
    tf: [["To transfer a call is to send it to another person.", true], ["To hang up means to speak more clearly.", false], ["An urgent message needs attention quickly.", true]],
    quiz: { q: "What can you say when you did not hear someone?", options: ["I didn't quite catch that.", "The venue is fully booked.", "Please swipe your card.", "The cargo is insured."], answer: 0 },
    fill: { sentence: "Could you ___ it? I didn't quite catch that.", answer: "repeat" },
    order: "May I put you on hold for a moment?",
    listen: { text: "I'm sorry, but Mr Hunter is currently unavailable. Can you tell him to call you back as soon as possible?", question: "What should Mr Hunter do?", options: ["Call back", "Send a parcel", "Book a room", "Clock in"], answer: 0 },
    writing: { prompt: "Write a telephone message for a colleague who is currently unavailable.", checklist: ["I included the caller's name.", "I included the reason for the call.", "I included a call-back request."] }
  },
  {
    id: 7, title: "Scheduling Meetings", topics: ["Scheduling Meetings", "Booking Offsite Events"], bookPages: "34-37", workbookPages: "16-17",
    intro: "Arrange meetings, check availability, choose a venue and organise event details.",
    vocab: [["attendee", "a person who attends"], ["reschedule", "arrange for a later or different time"], ["suit", "be convenient for someone"], ["venue", "a place for an event"], ["refreshments", "drinks and light food"], ["delegate", "a person attending a conference"]],
    reading: { heading: "A meeting request", text: "Could you book a conference room from 1 to 3.00 for our meeting? Thursday does not suit me, so shall we reschedule for a later date?", question: "What can you do when a day does not suit someone?", options: ["Reschedule", "Clock out", "Unload the goods", "Rewind the message"], answer: 0 },
    tf: [["An attendee is a person who attends a meeting.", true], ["A venue is a type of password.", false], ["Refreshments can include drinks.", true]],
    quiz: { q: "Where can an offsite meeting take place?", options: ["At a venue such as a hotel", "Only at a desk", "In a stockroom", "Inside a voicemail"], answer: 0 },
    fill: { sentence: "Thursday doesn't ___ me. Could we meet on Friday?", answer: "suit" },
    order: "Could you book a conference room from one to three?",
    listen: { text: "The CEO cannot attend the meeting today because he is ill. Shall we have a fifteen-minute break at eleven?", question: "Why cannot the CEO attend?", options: ["He is ill", "He is out of town", "He is in a conference room", "He is on holiday"], answer: 0 },
    writing: { prompt: "Write a meeting invitation with a date, time, venue, attendees and refreshments.", checklist: ["I included date and time.", "I named the venue.", "I used a polite invitation."] }
  },
  {
    id: 8, title: "Planning Meetings", topics: ["Planning Meetings", "Taking Minutes"], bookPages: "38-41", workbookPages: "18-19",
    intro: "Prepare an agenda, clarify objectives, record decisions and share action points after a meeting.",
    vocab: [["opening remarks", "words at the beginning of an event"], ["closing session", "the final part of an event"], ["board of directors", "the group leading a company"], ["action point", "a task agreed at a meeting"], ["agenda", "a list of items for a meeting"], ["summarise", "give the main points briefly"]],
    reading: { heading: "Before and after a meeting", text: "To prepare for a meeting, read through the agenda and make sure you know the objectives. After the meeting, type up your notes and send them to the attendees.", question: "What should you read before the meeting?", options: ["The agenda", "The boarding pass", "The waybill", "The password"], answer: 0 },
    tf: [["An agenda lists items for a meeting.", true], ["Minutes are a record of everything discussed.", true], ["Action points are only decorations.", false]],
    quiz: { q: "What should you send to the attendees after the meeting?", options: ["Typed-up notes", "A parcel label", "A new PIN", "A hotel menu"], answer: 0 },
    fill: { sentence: "Let's read through the ___ before the meeting.", answer: "agenda" },
    order: "We have to agree on some issues before we deliver the goods.",
    listen: { text: "The Financial Director gave the opening remarks. The Managing Director gave the closing presentation.", question: "Who gave the opening remarks?", options: ["The Financial Director", "The CEO's assistant", "The courier", "The receptionist"], answer: 0 },
    writing: { prompt: "Write a short set of meeting minutes with two decisions and two action points.", checklist: ["I used an agenda or objectives.", "I recorded decisions.", "I assigned action points."] }
  },
  {
    id: 9, title: "Organising Exhibitions", topics: ["Organising Exhibitions", "Attending Business Events"], bookPages: "44-47", workbookPages: "20-21",
    intro: "Prepare a stand, displays, brochures and business cards, then start a conversation at a business event.",
    vocab: [["brochure", "a small publication with information"], ["display", "show something to the public"], ["booth", "a small area at an exhibition"], ["promotional material", "items used to promote a product"], ["logo", "a symbol that identifies a company"], ["business card", "a card with professional contact details"]],
    reading: { heading: "At the exhibition", text: "Each representative should have enough business cards and promotional material to hand out to customers. The booth can include display boards, brochures and product photographs.", question: "What can representatives hand out?", options: ["Business cards", "Boarding passes", "Sick notes", "PIN numbers"], answer: 0 },
    tf: [["A logo identifies a company.", true], ["A booth is a large shipping vessel.", false], ["A brochure contains information about products or services.", true]],
    quiz: { q: "What can you exchange at a business event?", options: ["Business cards", "Office keys", "Invoices only", "Voicemail PINs"], answer: 0 },
    fill: { sentence: "We need a banner with the company's name, ___ and slogan.", answer: "logo" },
    order: "We must sign up for the convention by 20th March.",
    listen: { text: "Hi, I'm Megan Roberts. I represent ABA Import and Export. Nice to meet you.", question: "What does Megan exchange in a professional introduction?", options: ["Her name and company", "A password", "A room key", "A shipment rate"], answer: 0 },
    writing: { prompt: "Write a short introduction for a business event. Say who you are, what company you represent and what you produce.", checklist: ["I introduced myself.", "I named a company or product line.", "I used a professional greeting."] }
  },
  {
    id: 10, title: "Making Travel Arrangements", topics: ["Making Travel Arrangements", "Booking Hotels & Restaurants"], bookPages: "48-51", workbookPages: "22-23",
    intro: "Book a trip, understand airport language and choose hotel rooms and services.",
    vocab: [["boarding pass", "a document needed to get on a flight"], ["stopover", "a break in a journey"], ["inbound flight", "a flight arriving"], ["return ticket", "a ticket that includes the flight home"], ["low season", "a quiet time for a hotel"], ["half board", "including breakfast and dinner"]],
    reading: { heading: "A business trip", text: "The direct flight to Rome has been cancelled. You can check in online 24 hours before your flight. At the hotel, a business centre and laundry service may be useful.", question: "What flight has been cancelled?", options: ["The direct flight to Rome", "The inbound flight to Berlin", "The return flight to Paris", "The stopover flight"], answer: 0 },
    tf: [["A return ticket includes the flight home.", true], ["A stopover is a break in a journey.", true], ["Half board includes three meals.", false]],
    quiz: { q: "What does a boarding pass help a passenger do?", options: ["Get on a flight", "Book a conference room", "Answer a call", "File documents"], answer: 0 },
    fill: { sentence: "We had a seven-hour ___ in Paris.", answer: "stopover" },
    order: "You can check in online twenty-four hours before your flight.",
    listen: { text: "I'm afraid business class is fully booked. The direct flight on 15th May has been cancelled.", question: "What is fully booked?", options: ["Business class", "The hotel spa", "The conference room", "The car park"], answer: 0 },
    writing: { prompt: "Write a business travel plan with a flight, a hotel room and one hotel service.", checklist: ["I used two travel terms.", "I included a hotel request.", "I included a date or time."] }
  },
  {
    id: 11, title: "Taking Leave and Clocking In", topics: ["Taking Leave and Clocking In", "Security in the Workplace"], bookPages: "54-57", workbookPages: "24-25",
    intro: "Talk about annual leave, time clocks and the basic security systems used in a workplace.",
    vocab: [["annual leave", "time away from work each year"], ["clock in", "record the time you arrive"], ["clock out", "record the time you leave"], ["sick leave", "time away from work because you are ill"], ["security guard", "a person who protects a place"], ["firewall", "a defence system for computer networks"]],
    reading: { heading: "Workplace routines", text: "Employees must clock in when they arrive and clock out when they leave. They should never swipe a colleague's card. Security cameras, alarm systems and firewalls protect the workplace.", question: "What must employees do when they leave?", options: ["Clock out", "Sign up", "Check in online", "Unload cargo"], answer: 0 },
    tf: [["Annual leave is time away from work each year.", true], ["A firewall is a defence system for computer networks.", true], ["A security camera is a type of office supply.", false]],
    quiz: { q: "What protects a computer network?", options: ["A firewall", "A boarding pass", "A brochure", "A venue"], answer: 0 },
    fill: { sentence: "Don't forget to scan the ___ card when you arrive.", answer: "reader" },
    order: "You must clock in when you get to work.",
    listen: { text: "If they lose their swipe card, workers must tell security immediately.", question: "What should workers do if they lose a swipe card?", options: ["Tell security immediately", "Keep it secret", "Clock out twice", "Call the courier"], answer: 0 },
    writing: { prompt: "Write a short workplace notice explaining two time-clock rules and one security rule.", checklist: ["I used clock in or clock out.", "I included one leave phrase.", "I included one security measure."] }
  },
  {
    id: 12, title: "Customer Service", topics: ["Customer Service", "Handling Complaints"], bookPages: "58-61", workbookPages: "26-27",
    intro: "Respond professionally to enquiries and complaints, apologise, offer solutions and protect the customer relationship.",
    vocab: [["enquiry", "a request for information"], ["complaint", "a statement that something is wrong"], ["refund", "money returned to a customer"], ["replacement", "a new item given instead of a faulty one"], ["compensation", "money or help for a problem"], ["inconvenience", "a problem that causes difficulty"]],
    reading: { heading: "A customer complaint", text: "A customer says that an air conditioner is making a noise. The technician found a faulty part, but the company has not been in touch. The customer wants compensation for the inconvenience.", question: "What is faulty?", options: ["A part", "The venue", "The boarding pass", "The company logo"], answer: 0 },
    tf: [["You apologise for something you are sorry you have done.", true], ["A refund is money returned to a customer.", true], ["A dissatisfied customer has probably received excellent service.", false]],
    quiz: { q: "What can a customer ask for when a product is faulty?", options: ["A refund or replacement", "A boarding pass", "A business card", "A new venue"], answer: 0 },
    fill: { sentence: "I'm sorry for the ___ caused by this problem.", answer: "inconvenience" },
    order: "I'm afraid there have been some complaints from customers.",
    listen: { text: "We are disappointed because the service failed to meet our expectations. We insist on full compensation.", question: "What do the customers insist on?", options: ["Full compensation", "A new meeting", "A stopover", "A password"], answer: 0 },
    writing: { prompt: "Write a professional reply to a customer complaint. Apologise, explain the problem and offer a solution.", checklist: ["I apologised.", "I explained a problem.", "I offered a solution or compensation."] }
  },
  {
    id: 13, title: "Market Research", topics: ["Market Research", "Marketing Strategies"], bookPages: "64-67", workbookPages: "28-29",
    intro: "Ask useful research questions, identify a target population and connect findings to marketing strategies.",
    vocab: [["questionnaire", "a list of questions"], ["interviewee", "a person answering questions"], ["prototype", "an early version of a product"], ["focus group", "a group giving opinions"], ["market share", "a company's part of a market"], ["conduct a survey", "ask people questions to collect information"]],
    reading: { heading: "Research before a launch", text: "The aim of the questions is to find out how popular a product is. Price is an important factor. A focus group can give opinions about a new product.", question: "What is an important factor mentioned?", options: ["Price", "The weather", "A password", "The venue"], answer: 0 },
    tf: [["A prototype is an early version of a product.", true], ["A focus group gives opinions about products.", true], ["Market research means repairing office equipment.", false]],
    quiz: { q: "Who answers questions in an interview?", options: ["An interviewee", "A consignee", "A security guard", "A delegate"], answer: 0 },
    fill: { sentence: "The research team will ___ of 1,000 British women.", answer: "conduct a survey" },
    order: "We need to find out if people are interested in our products.",
    listen: { text: "Our target population should be women between the ages of twenty and thirty.", question: "Who is the target population?", options: ["Women aged 20 to 30", "All employees", "Customers in a hotel", "The board of directors"], answer: 0 },
    writing: { prompt: "Write four market-research questions for a new product and identify the target population.", checklist: ["I wrote four questions.", "I used a research term.", "I identified a target population."] }
  },
  {
    id: 14, title: "Cash Flow", topics: ["Cash Flow", "Accounting"], bookPages: "68-71", workbookPages: "30-31",
    intro: "Read basic accounting language around assets, liabilities, revenue, expenses, profit and cash balance.",
    vocab: [["profitable", "creating revenue"], ["expenses", "things that cost money"], ["gross", "the total amount before deductions"], ["net", "the amount after deductions"], ["accounts payable", "money a company owes"], ["accounts receivable", "money owed to a company"]],
    reading: { heading: "A company's finances", text: "A balance sheet shows assets and liabilities. Assets may include property, cash and machines. Accounts payable is money a company owes, while accounts receivable is money owed to a company.", question: "What can a balance sheet show?", options: ["Assets and liabilities", "Only holidays", "Only hotel rooms", "Only phone messages"], answer: 0 },
    tf: [["Gross is the total amount before deductions.", true], ["Net is the amount after deductions.", true], ["Expenses are things that create no costs.", false]],
    quiz: { q: "What is accounts receivable?", options: ["Money owed to a company", "Money a company owes", "A company password", "A type of insurance"], answer: 0 },
    fill: { sentence: "Salaries are one of a company's ___.", answer: "expenses" },
    order: "A company's balance sheet shows its assets and liabilities.",
    listen: { text: "When a company makes a profit, its shareholders may receive dividends.", question: "Who may receive dividends?", options: ["Shareholders", "Couriers", "Interviewees", "Security guards"], answer: 0 },
    writing: { prompt: "Write a short financial summary using assets, liabilities, expenses and profit.", checklist: ["I used four accounting terms.", "I distinguished assets and liabilities.", "I wrote a clear summary."] }
  },
  {
    id: 15, title: "Banking", topics: ["Banking", "Insurance"], bookPages: "74-77", workbookPages: "32-33",
    intro: "Practise banking transactions and insurance language: loans, credit, premiums, policies and claims.",
    vocab: [["loan", "money borrowed from a bank"], ["overdrawn", "having spent more money than is in an account"], ["withdraw", "take money out of an account"], ["credit rating", "an assessment of how safely someone borrows"], ["insurance policy", "a contract with insurance conditions"], ["premium", "the amount paid to be insured"]],
    reading: { heading: "Banking and insurance", text: "A company may borrow money, use a line of credit or withdraw money from an account. An insurance policy describes the conditions for compensating the person who is insured.", question: "What does an insurance policy describe?", options: ["Conditions for compensation", "A meeting agenda", "A shipping route", "A hotel menu"], answer: 0 },
    tf: [["A loan is money borrowed from a bank.", true], ["To withdraw is to put money into an account.", false], ["A premium is paid to be insured.", true]],
    quiz: { q: "What may a bank assess with a credit rating?", options: ["How safely someone borrows", "The quality of a brochure", "The size of a venue", "The length of a voicemail"], answer: 0 },
    fill: { sentence: "I withdrew £250 to pay the electrician. I took the money from my ___.", answer: "account" },
    order: "The bank gave the company a loan of fifty thousand pounds.",
    listen: { text: "You should take out e-risks insurance to protect your computer systems.", question: "What should the insurance protect?", options: ["Computer systems", "A hotel guest", "A shipping container", "A conference room"], answer: 0 },
    writing: { prompt: "Write a short email asking a bank or insurer for information about a loan or policy.", checklist: ["I made a clear enquiry.", "I used two banking or insurance terms.", "I asked for a reply."] }
  },
  {
    id: 16, title: "Global E-commerce", topics: ["Global E-commerce", "Dealing with Suppliers"], bookPages: "78-81", workbookPages: "34-35",
    intro: "Plan an online shop, protect customer information and communicate with suppliers about orders and returns.",
    vocab: [["shopping cart", "the place for items a customer wants to buy"], ["host a website", "provide a place for a website online"], ["domain name", "the name of a website"], ["encrypted", "protected by coding"], ["place an order", "ask to buy products"], ["returns policy", "rules for returning products"]],
    reading: { heading: "Opening an e-shop", text: "Choose a simple domain name, find a reliable company to host the website and make sure payment data is encrypted. Put items in the shopping cart before you place an order.", question: "What should payment data be?", options: ["Encrypted", "Uninsured", "Handwritten", "Unloaded"], answer: 0 },
    tf: [["A shopping cart contains items a customer wants to buy.", true], ["A domain name is a hotel service.", false], ["A returns policy explains how customers can return items.", true]],
    quiz: { q: "What can a customer do with a shopping cart?", options: ["Put items there before ordering", "Clock in", "Record voicemail", "Book a stopover"], answer: 0 },
    fill: { sentence: "Make sure all payment data is ___.", answer: "encrypted" },
    order: "We need to find a reliable company to host our website.",
    listen: { text: "Do you think we should purchase these items? Yes. I'll place an order for fifty of them.", question: "How many items will they order?", options: ["Fifty", "Fifteen", "Five", "One hundred"], answer: 0 },
    writing: { prompt: "Write three e-commerce tips and a short message to a supplier placing an order.", checklist: ["I used an online-shopping term.", "I included a quantity.", "I wrote a polite supplier message."] }
  },
  {
    id: 17, title: "Teambuilding", topics: ["Teambuilding", "Teamwork"], bookPages: "84-87", workbookPages: "36-37",
    intro: "Talk about team spirit, communication, interpersonal skills, challenges and working together.",
    vocab: [["team spirit", "a feeling of working well together"], ["interpersonal skills", "skills for dealing with people"], ["prioritise", "decide what is most important"], ["workshop", "a meeting for practical learning"], ["approach", "a way of dealing with something"], ["bond", "develop a connection"]],
    reading: { heading: "A strong team", text: "A team can build team spirit through communication workshops. Members need interpersonal skills, should prioritise tasks and can bond quickly when they work together.", question: "What can build team spirit?", options: ["Communication workshops", "A boarding pass", "A firewall", "A balance sheet"], answer: 0 },
    tf: [["Interpersonal skills help people deal with others.", true], ["To prioritise means to ignore every task.", false], ["Team members can bond by working together.", true]],
    quiz: { q: "What should you do when you have too many tasks?", options: ["Prioritise", "Rewind", "Unload", "Swipe"], answer: 0 },
    fill: { sentence: "We have got a lot of ___ in our team.", answer: "team spirit" },
    order: "We don't want a formal setting for the workshop.",
    listen: { text: "Have you got any suggestions? I think we need a different approach.", question: "What does the speaker need?", options: ["Suggestions", "A boarding pass", "A refund", "A salary"], answer: 0 },
    writing: { prompt: "Write a short plan for a team workshop with an objective, two activities and a final action point.", checklist: ["I included a team-building word.", "I wrote an objective.", "I included an action point."] }
  },
  {
    id: 18, title: "Leadership Skills", topics: ["Leadership Skills", "Strategy Planning"], bookPages: "88-91", workbookPages: "38-39",
    intro: "Use leadership language to identify problems, plan direction, implement ideas and respond to change.",
    vocab: [["proactive", "acting before a problem happens"], ["reactive", "responding after a problem happens"], ["implement", "put a plan into action"], ["direction", "the course or plan of action"], ["vision", "an idea of the future"], ["crisis", "a very difficult situation"]],
    reading: { heading: "Strategy planning", text: "A proactive manager identifies a situation before it becomes a problem. A good plan needs direction and a vision, but it also has to be implemented.", question: "What does a proactive manager do?", options: ["Acts before a problem", "Waits for every problem", "Cancels every meeting", "Avoids all decisions"], answer: 0 },
    tf: [["To implement a plan is to put it into action.", true], ["Reactive means acting before a problem.", false], ["A crisis is a very difficult situation.", true]],
    quiz: { q: "What can a manager give an unmotivated team?", options: ["Direction", "A stopover", "A shipment", "A password"], answer: 0 },
    fill: { sentence: "We need a plan, but it might be difficult to ___.", answer: "implement" },
    order: "We must increase our staff's awareness of security issues.",
    listen: { text: "Going forward, I'm sure we'll overcome this crisis and become stronger.", question: "What will the company overcome?", options: ["A crisis", "A venue", "A complaint", "A stopover"], answer: 0 },
    writing: { prompt: "Write a short strategy note: identify a problem, give a direction and explain how to implement the plan.", checklist: ["I identified a problem.", "I used direction or vision.", "I explained an action."] }
  },
  {
    id: 19, title: "Applying for a Job", topics: ["Applying for a Job", "Interviewing"], bookPages: "94-97", workbookPages: "40-41",
    intro: "Prepare for a job interview with language about qualifications, experience, skills, availability and references.",
    vocab: [["educational background", "what and where you studied"], ["vocational course", "a course for a job or profession"], ["fluent", "able to speak a language well"], ["conscientious", "careful and responsible"], ["starting salary", "the initial pay for a job"], ["references", "people who can recommend you"]],
    reading: { heading: "Interview preparation", text: "A candidate may talk about an educational background, vocational courses, language ability, interpersonal skills and experience working under pressure. An employer may ask for references.", question: "What can an employer ask for?", options: ["References", "A port of origin", "A security camera", "A product display"], answer: 0 },
    tf: [["A fluent person speaks a language well.", true], ["A starting salary is the final interview question.", false], ["References can recommend a candidate.", true]],
    quiz: { q: "What does conscientious mean?", options: ["Careful and responsible", "Very noisy", "Temporarily unavailable", "Imported"], answer: 0 },
    fill: { sentence: "I completed a ___ course in hotel management.", answer: "vocational" },
    order: "I am very interested in working for your company.",
    listen: { text: "I completed a programme on hotel management. I also worked well under pressure in my previous job.", question: "What did the candidate study?", options: ["Hotel management", "Shipping", "Accounting only", "Security systems"], answer: 0 },
    writing: { prompt: "Write a short answer to the interview question: Tell me about your educational background and skills.", checklist: ["I mentioned education or training.", "I used two job-application terms.", "I gave a professional example."] }
  },
  {
    id: 20, title: "Preparing and Writing a CV", topics: ["Preparing a CV", "Writing a CV"], bookPages: "98-101", workbookPages: "42-43",
    intro: "Organise a CV with qualifications, career objectives, achievements, layout, references and foreign languages.",
    vocab: [["career objectives", "where you see yourself professionally"], ["job description", "a description of a job"], ["proven track record", "a history of successful work"], ["layout", "headings and bullet points"], ["managerial skills", "decision-making and problem-solving"], ["foreign languages", "languages such as German or French"]],
    reading: { heading: "A clear CV", text: "A CV can include a bachelor's degree, career objectives, achievements, managerial skills, foreign languages and references. A clear layout uses headings and bullet points.", question: "What can a clear layout use?", options: ["Headings and bullet points", "Only photographs", "Only passwords", "Only invoices"], answer: 0 },
    tf: [["Career objectives describe where you see yourself professionally.", true], ["References are headings and bullet points.", false], ["Managerial skills include decision-making and problem-solving.", true]],
    quiz: { q: "What does a proven track record show?", options: ["A history of successful work", "A hotel booking", "A phone message", "A shipping rate"], answer: 0 },
    fill: { sentence: "I included my career ___ on my CV.", answer: "objectives" },
    order: "I included my career objectives on my CV.",
    listen: { text: "University qualifications include a diploma, a bachelor's degree and a master's degree.", question: "Which qualification is mentioned?", options: ["A diploma", "A boarding pass", "A premium", "A handout"], answer: 0 },
    writing: { prompt: "Create a one-page CV profile for an administration and finance student, using the vocabulary of this unit.", checklist: ["I used a clear layout.", "I included an objective.", "I included skills or qualifications."] }
  }
];

const state = {
  library: localStorage.getItem("oel-library") || "book",
  unitId: Number(localStorage.getItem("oel-unit") || 1),
  activityIndex: Number(localStorage.getItem("oel-activity") || 0),
  progress: JSON.parse(localStorage.getItem("oel-progress") || "{}"),
  match: { selectedTerm: null, matched: [], feedback: null },
  order: [],
  contrast: localStorage.getItem("oel-contrast") === "1"
};

const $ = (selector) => document.querySelector(selector);
const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[char]));
const currentUnit = () => units.find((unit) => unit.id === state.unitId) || units[0];
const progressKey = (kind = state.library, id = state.unitId) => `${kind}-${id}`;
const isComplete = (kind = state.library, id = state.unitId) => Boolean(state.progress[progressKey(kind, id)]);

function saveState() {
  localStorage.setItem("oel-library", state.library);
  localStorage.setItem("oel-unit", String(state.unitId));
  localStorage.setItem("oel-activity", String(state.activityIndex));
  localStorage.setItem("oel-progress", JSON.stringify(state.progress));
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("is-visible"), 2400);
}

function answerFeedback(target, good, goodText = "Correct! Nice work.", badText = "Not quite. Check the source language and try again.") {
  target.textContent = good ? goodText : badText;
  target.className = `feedback ${good ? "good" : "bad"}`;
}

function normalize(value) { return String(value).trim().toLowerCase().replace(/[.,!?']/g, "").replace(/\s+/g, " "); }

function speak(text) {
  if (!("speechSynthesis" in window)) { showToast("Tu navegador no dispone de lectura en voz alta."); return; }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "en-GB";
  utterance.rate = .9;
  window.speechSynthesis.speak(utterance);
}

function activitiesFor(unit) {
  const bookActivities = [
    { kind: "reading", label: "Reading", icon: "01" },
    { kind: "listen", label: "Listening", icon: "02" },
    { kind: "tf", label: "True / False", icon: "03" },
    { kind: "order", label: "Sentence Lab", icon: "04" },
    { kind: "speak", label: "Speaking", icon: "05" }
  ];
  const workbookActivities = [
    { kind: "match", label: "Match game", icon: "01" },
    { kind: "fill", label: "Complete", icon: "02" },
    { kind: "quiz", label: "Quick quiz", icon: "03" },
    { kind: "order", label: "Grammar order", icon: "04" },
    { kind: "writing", label: "Writing", icon: "05" }
  ];
  return state.library === "book" ? bookActivities : workbookActivities;
}

function renderUnitList() {
  const list = $("#unit-list");
  list.innerHTML = units.map((unit) => `
    <button class="unit-item ${unit.id === state.unitId ? "is-active" : ""} ${isComplete(state.library, unit.id) ? "is-complete" : ""}" data-unit="${unit.id}" type="button">
      <span class="unit-number">${String(unit.id).padStart(2, "0")}</span>
      <span class="unit-name">${esc(unit.title)}<small>${esc(unit.topics[1])}</small></span>
      <span class="unit-check">${isComplete(state.library, unit.id) ? "✓" : ""}</span>
    </button>`).join("");
  list.querySelectorAll("[data-unit]").forEach((button) => button.addEventListener("click", () => {
    state.unitId = Number(button.dataset.unit); state.activityIndex = 0; state.match = { selectedTerm: null, matched: [], feedback: null }; state.order = []; saveState(); render();
  }));
}

function renderHeader() {
  const done = units.filter((unit) => isComplete(state.library, unit.id)).length;
  const percentage = Math.round(done / units.length * 100);
  $("#sidebar-title").textContent = state.library === "book" ? "Student’s Book" : "Workbook";
  $("#overall-progress").style.width = `${percentage}%`;
  $("#progress-caption").textContent = `${done} de 20 unidades completadas`;
  $("#completed-stat").textContent = `${percentage}%`;
  $("#streak-badge").textContent = done ? `${done} unidades en marcha` : "0 días de práctica";
  document.querySelectorAll(".book-tab").forEach((tab) => {
    const active = tab.dataset.library === state.library;
    tab.classList.toggle("is-active", active); tab.setAttribute("aria-selected", String(active));
  });
}

function render() {
  renderHeader();
  renderUnitList();
  const unit = currentUnit();
  const activities = activitiesFor(unit);
  if (state.activityIndex >= activities.length) state.activityIndex = 0;
  const source = state.library === "book" ? `Student’s Book · pp. ${unit.bookPages}` : `Workbook · pp. ${unit.workbookPages}`;
  $("#lesson-content").innerHTML = `
    <div class="lesson-head">
      <div><p class="unit-kicker">UNIT ${String(unit.id).padStart(2, "0")} · ${state.library === "book" ? "CORE PRACTICE" : "WORKBOOK DRILLS"}</p><h2>${esc(unit.title)}</h2></div>
      <div class="unit-meta"><span class="chip chip-accent">${source}</span><span class="chip">${isComplete() ? "Completada" : "En progreso"}</span></div>
    </div>
    <div class="topic-strip">${unit.topics.map((topic) => `<span class="topic-pill">${esc(topic)}</span>`).join("")}</div>
    <div class="lesson-intro"><strong>Ruta de hoy:</strong> ${esc(unit.intro)} <span class="source-note">Las actividades son prácticas interactivas construidas con el vocabulario, textos e instrucciones de esta unidad.</span></div>
    <section class="activity-shell" aria-label="Actividades de la unidad">
      <div class="activity-nav">${activities.map((activity, index) => `<button type="button" class="${index === state.activityIndex ? "is-active" : ""}" data-activity="${index}"><span>${activity.icon}</span> ${activity.label}</button>`).join("")}</div>
      <div id="activity-content"></div>
    </section>
    <div class="completion-banner"><p><strong>Micro-logro:</strong> completa las cinco actividades de esta unidad para marcar esta ruta.</p><button type="button" class="complete-button ${isComplete() ? "is-complete" : ""}" id="complete-unit">${isComplete() ? "✓ Unidad completada" : "Marcar unidad"}</button></div>`;
  document.querySelectorAll("[data-activity]").forEach((button) => button.addEventListener("click", () => { state.activityIndex = Number(button.dataset.activity); state.match = { selectedTerm: null, matched: [], feedback: null }; state.order = []; saveState(); render(); }));
  $("#complete-unit").addEventListener("click", () => { const key = progressKey(); if (state.progress[key]) delete state.progress[key]; else state.progress[key] = true; saveState(); render(); showToast(state.progress[key] ? "Unidad marcada como completada." : "Unidad devuelta a progreso."); });
  renderActivity(unit, activities[state.activityIndex]);
}

function activityFrame(activity, body) {
  const unit = currentUnit();
  const source = state.library === "book" ? `Student’s Book · pp. ${unit.bookPages}` : `Workbook · pp. ${unit.workbookPages}`;
  return `<div class="activity-title-row"><div><h3>${activity.title}</h3><p class="activity-instruction">${activity.instruction}</p></div><span class="source-label">${source}</span></div>${body}`;
}

function renderActivity(unit, activity) {
  const host = $("#activity-content");
  if (!host) return;
  if (activity.kind === "reading") {
    host.innerHTML = activityFrame({ title: "Reading radar", instruction: "Read the source snapshot and choose the answer." }, `<div class="reading-card"><strong>${esc(unit.reading.heading)}</strong><p>${esc(unit.reading.text)}</p></div><div class="question-box"><p>${esc(unit.reading.question)}</p><div class="option-grid">${unit.reading.options.map((option, index) => `<button type="button" class="option-button" data-read-option="${index}">${esc(option)}</button>`).join("")}</div><div class="feedback" id="read-feedback"></div></div>`);
    document.querySelectorAll("[data-read-option]").forEach((button) => button.addEventListener("click", () => { const good = Number(button.dataset.readOption) === unit.reading.answer; document.querySelectorAll("[data-read-option]").forEach((b) => b.classList.remove("is-correct", "is-wrong")); button.classList.add(good ? "is-correct" : "is-wrong"); answerFeedback($("#read-feedback"), good); }));
  }
  if (activity.kind === "listen") {
    host.innerHTML = activityFrame({ title: "Listening lab", instruction: "Pulsa el audio, escucha la frase y responde." }, `<div class="listen-box"><p>La voz usa text-to-speech del navegador para practicar el lenguaje de la unidad. No sustituye al audio original del libro.</p><button type="button" class="speak-button" id="speak-main">▶ Escuchar en inglés</button></div><div class="question-box"><p>${esc(unit.listen.question)}</p><div class="option-grid">${unit.listen.options.map((option, index) => `<button type="button" class="option-button" data-listen-option="${index}">${esc(option)}</button>`).join("")}</div><div class="feedback" id="listen-feedback"></div></div>`);
    $("#speak-main").addEventListener("click", () => speak(unit.listen.text));
    document.querySelectorAll("[data-listen-option]").forEach((button) => button.addEventListener("click", () => { const good = Number(button.dataset.listenOption) === unit.listen.answer; document.querySelectorAll("[data-listen-option]").forEach((b) => b.classList.remove("is-correct", "is-wrong")); button.classList.add(good ? "is-correct" : "is-wrong"); answerFeedback($("#listen-feedback"), good); }));
  }
  if (activity.kind === "tf") {
    host.innerHTML = activityFrame({ title: "True or false", instruction: "Decide first. Después comprueba el resultado y vuelve a leer la fuente." }, `<div class="question-box"><ol class="mini-list">${unit.tf.map((item, index) => `<li><div><p>${esc(item[0])}</p><div class="option-grid"><button class="choice-button" type="button" data-tf="${index}" data-answer="true">True</button><button class="choice-button" type="button" data-tf="${index}" data-answer="false">False</button></div><div class="feedback" id="tf-feedback-${index}"></div></div></li>`).join("")}</ol></div>`);
    document.querySelectorAll("[data-tf]").forEach((button) => button.addEventListener("click", () => { const index = Number(button.dataset.tf); const good = String(unit.tf[index][1]) === button.dataset.answer; document.querySelectorAll(`[data-tf="${index}"]`).forEach((b) => b.classList.remove("is-correct", "is-wrong")); button.classList.add(good ? "is-correct" : "is-wrong"); answerFeedback($(`#tf-feedback-${index}`), good, "Correct. That matches the source language.", "Not quite. Look again at the unit wording."); }));
  }
  if (activity.kind === "match") {
    host.innerHTML = activityFrame({ title: "Match game", instruction: "Selecciona un término y después su definición. Completa todas las parejas." }, `<div class="match-grid"><div class="match-column"><span class="match-column-label">Terms</span>${unit.vocab.slice(0, 5).map((pair, index) => `<button class="match-button ${state.match.matched.includes(index) ? "is-matched" : ""} ${state.match.selectedTerm === index ? "is-selected" : ""}" type="button" data-term="${index}">${esc(pair[0])}</button>`).join("")}</div><div class="match-column"><span class="match-column-label">Definitions</span>${unit.vocab.slice(0, 5).map((pair, index) => `<button class="match-button ${state.match.matched.includes(index) ? "is-matched" : ""}" type="button" data-definition="${index}">${esc(pair[1])}</button>`).sort(() => .5 - Math.random()).join("")}</div></div><div class="feedback" id="match-feedback"></div>`);
    if (state.match.feedback) answerFeedback($("#match-feedback"), state.match.feedback.good, state.match.feedback.text, state.match.feedback.text);
    document.querySelectorAll("[data-term]").forEach((button) => button.addEventListener("click", () => { if (!state.match.matched.includes(Number(button.dataset.term))) { state.match.selectedTerm = Number(button.dataset.term); renderActivity(unit, activity); } }));
    document.querySelectorAll("[data-definition]").forEach((button) => button.addEventListener("click", () => { const definitionIndex = Number(button.dataset.definition); if (state.match.selectedTerm === null || state.match.matched.includes(definitionIndex)) return; const good = state.match.selectedTerm === definitionIndex; if (good) state.match.matched.push(definitionIndex); state.match.feedback = { good, text: good ? (state.match.matched.length === 5 ? "Todas las parejas están correctas. ¡Match complete!" : "Correct match! Sigue con la siguiente.") : "Try again: find the definition that belongs to the selected term." }; state.match.selectedTerm = null; renderActivity(unit, activity); }));
  }
  if (activity.kind === "fill") {
    host.innerHTML = activityFrame({ title: "Complete the sentence", instruction: "Escribe la palabra o expresión exacta de la unidad." }, `<div class="question-box"><p>${esc(unit.fill.sentence)}</p><div class="inline-form"><input class="text-input" id="fill-answer" type="text" autocomplete="off" aria-label="Tu respuesta"><button class="check-button" id="fill-check" type="button">Comprobar</button></div><div class="feedback" id="fill-feedback"></div></div>`);
    $("#fill-check").addEventListener("click", () => answerFeedback($("#fill-feedback"), normalize($("#fill-answer").value) === normalize(unit.fill.answer), "Correct!", `La respuesta de esta actividad es: ${unit.fill.answer}.`));
  }
  if (activity.kind === "quiz") {
    host.innerHTML = activityFrame({ title: "Quick quiz", instruction: "Una pregunta, cuatro opciones, cero aburrimiento." }, `<div class="question-box"><p>${esc(unit.quiz.q)}</p><div class="option-grid">${unit.quiz.options.map((option, index) => `<button type="button" class="option-button" data-quiz-option="${index}">${esc(option)}</button>`).join("")}</div><div class="feedback" id="quiz-feedback"></div></div>`);
    document.querySelectorAll("[data-quiz-option]").forEach((button) => button.addEventListener("click", () => { const good = Number(button.dataset.quizOption) === unit.quiz.answer; document.querySelectorAll("[data-quiz-option]").forEach((b) => b.classList.remove("is-correct", "is-wrong")); button.classList.add(good ? "is-correct" : "is-wrong"); answerFeedback($("#quiz-feedback"), good); }));
  }
  if (activity.kind === "order") {
    const words = unit.order.replace(/[.?!]/g, "").split(" ");
    if (!state.order.length) state.order = [];
    host.innerHTML = activityFrame({ title: state.library === "book" ? "Sentence lab" : "Grammar order", instruction: "Pulsa los bloques en el orden correcto. Puedes reiniciar cuando quieras." }, `<div class="tile-bank">${words.map((word, index) => `<button type="button" class="word-tile" data-word-index="${index}" ${state.order.includes(index) ? "disabled" : ""}>${esc(word)}</button>`).join("")}</div><div class="sentence-builder">${state.order.length ? state.order.map((index) => `<span class="built-word">${esc(words[index])}</span>`).join("") : "<span class='empty-hint'>Your sentence will appear here.</span>"}</div><div class="inline-form"><button class="check-button" type="button" id="order-check">Comprobar</button><button class="text-button" type="button" id="order-reset">Reiniciar</button></div><div class="feedback" id="order-feedback"></div>`);
    document.querySelectorAll("[data-word-index]").forEach((button) => button.addEventListener("click", () => { state.order.push(Number(button.dataset.wordIndex)); renderActivity(unit, activity); }));
    $("#order-reset").addEventListener("click", () => { state.order = []; renderActivity(unit, activity); });
    $("#order-check").addEventListener("click", () => { const built = state.order.map((index) => words[index]).join(" "); answerFeedback($("#order-feedback"), normalize(built) === normalize(unit.order), "Perfect sentence order!", `Try again. Target: ${unit.order}`); });
  }
  if (activity.kind === "speak") {
    host.innerHTML = activityFrame({ title: "Speaking studio", instruction: "Escucha, repite y practica la mini-situación en voz alta." }, `<div class="reading-card"><strong>Role-play prompt</strong><p>${esc(unit.writing.prompt)}</p></div><div class="listen-box"><p>Usa el botón como modelo de pronunciación para una frase clave de la unidad:</p><button type="button" class="speak-button" id="speak-role">▶ Hear a model</button></div><button class="check-button" type="button" id="speaking-done">He practicado en voz alta</button><div class="feedback" id="speaking-feedback"></div>`);
    $("#speak-role").addEventListener("click", () => speak(unit.order));
    $("#speaking-done").addEventListener("click", () => answerFeedback($("#speaking-feedback"), true, "Great. Speaking practice logged for this session."));
  }
  if (activity.kind === "writing") {
    const saved = localStorage.getItem(`oel-writing-${unit.id}`) || "";
    host.innerHTML = activityFrame({ title: "Writing studio", instruction: "Escribe con tus palabras usando el lenguaje de la unidad. Aquí no hay una única respuesta." }, `<div class="reading-card"><strong>Task</strong><p>${esc(unit.writing.prompt)}</p></div><textarea class="writing-area" id="writing-area" placeholder="Start writing in English...">${esc(saved)}</textarea><div class="writing-tools"><span class="word-count" id="word-count">0 words</span><button class="check-button" id="save-writing" type="button">Guardar borrador</button></div><div class="checklist">${unit.writing.checklist.map((item, index) => `<label><input type="checkbox" data-writing-check="${index}"> <span>${esc(item)}</span></label>`).join("")}</div><div class="feedback" id="writing-feedback"></div>`);
    const area = $("#writing-area"); const count = () => { const words = area.value.trim() ? area.value.trim().split(/\s+/).length : 0; $("#word-count").textContent = `${words} words`; }; count(); area.addEventListener("input", count); $("#save-writing").addEventListener("click", () => { localStorage.setItem(`oel-writing-${unit.id}`, area.value); answerFeedback($("#writing-feedback"), true, "Draft saved in this browser."); });
  }
}

document.querySelectorAll(".book-tab").forEach((tab) => tab.addEventListener("click", () => { state.library = tab.dataset.library; state.activityIndex = 0; state.match = { selectedTerm: null, matched: [], feedback: null }; state.order = []; saveState(); render(); }));
$("#continue-button").addEventListener("click", () => { document.querySelector(".workspace-grid").scrollIntoView({ behavior: "smooth", block: "start" }); });
$("#random-button").addEventListener("click", () => { state.unitId = units[Math.floor(Math.random() * units.length)].id; state.activityIndex = 0; state.match = { selectedTerm: null, matched: [], feedback: null }; state.order = []; saveState(); render(); document.querySelector(".workspace-grid").scrollIntoView({ behavior: "smooth", block: "start" }); });
$("#contrast-toggle").addEventListener("click", () => { state.contrast = !state.contrast; document.body.classList.toggle("high-contrast", state.contrast); localStorage.setItem("oel-contrast", state.contrast ? "1" : "0"); });
$("#reset-button").addEventListener("click", () => { if (!window.confirm("¿Reiniciar el progreso de las 20 unidades en este navegador?")) return; state.progress = {}; localStorage.removeItem("oel-progress"); render(); showToast("Progreso reiniciado."); });

document.body.classList.toggle("high-contrast", state.contrast);
render();
