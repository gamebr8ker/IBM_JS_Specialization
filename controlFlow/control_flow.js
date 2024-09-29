let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access level: ", accessLevel);



// Defining variables in nested if
let isLoggedIn = true;
let userMessage;    // Declares but doesn't initialize the var

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin";
    } else {
        userMessage = "Welcome, User";
    }
} else {
    userMessage = "Please log in to access the system";
}

console.log("User Message: ", userMessage);



// Switch Statement
let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;

    case "manager":
        userCategory = "Manager";
        break;
    
    case "subscriber":
        userCategory = "Subscriber";
        break;
    
    default:
        userCategory = "Unknown";
}

console.log("User Category: ", userCategory);




// Use Ternary Operator
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not Authenticated";

console.log("Authentication Status: ", authenticationStatus);





// Practice Task 
// Provides access to people based on their role in the org.

// Test 1 role at a time, via humanRole
let humanRole = "Employee";
let humanService;
let serviceLevels = {
    "Employee": "Dietary Services",
    "Enrolled Member": ["Dietary Services", "Interaction"],
    "Subscriber": "Dietary Services (Partial)",
    "Non-Subscriber": "No services"
}
//console.log(serviceLevels);

humanService = serviceLevels[humanRole];
console.log(humanService);





// (Alternative) Test all of the roles...
// Uses serviceLevels from above
let allHumans = ["Employee", "Enrolled Member", "Subscriber", "Non-Subscriber"];

for (let human = 0; human < allHumans.length; human++) {
    let humanRoleSub = allHumans[human]
    let humanServiceSub = serviceLevels[humanRoleSub]
    console.log("Role: ", humanRoleSub, "\n", "Service: ", humanServiceSub);
}