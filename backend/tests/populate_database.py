import requests

names = "Willie Price, Karen Henderson, Maria Rogers, Daniel Hernandez, Ashley Scott, Kathy Garcia, Sarah Cook, Roy Bell, James Rodriguez, Ryan Morris".split(',')
PASS = "test"
# Each fake student has the password 'test'
SIGNUP_URL = "http://localhost:3000/user/signup"
USER_TYPE = "student"

def populate_names():
    for name in names :
        user = {}
        split_name = name.split()
        user['username'] = split_name[0].lower()
        user['first_name'] = split_name[0]
        user['last_name'] = split_name[1]
        user['email'] = split_name[0].lower() + "@" + split_name[1].lower()
        user['password'] = PASS
        user['user_type'] = USER_TYPE
        print(user)
        r = requests.post(SIGNUP_URL, user)
        print(r.text)

# Created courses: CSC301 - 10 students, CSC309 - 5 students, CSC363 - 7 students, CSC343 - 9 students
COURSE = "CSC343"
ENROL_URL = "http://localhost:3000/user/enrolclass"

def populate_students_to_class():
    i = 0
    for name in names :
        user = {}
        split_name = name.split()
        user['username'] = split_name[0].lower()
        user['value'] = COURSE
        print(user)
        r = requests.post(ENROL_URL, user)
        print(r.text)
        i += 1
        if(i == 9) :
            break


populate_students_to_class()



# craig teaches CSC343, micah teaches CSC301, rahul teaches CSC309, kyle teaches CSC363, CSC384
# each instructors' password is their own username.
