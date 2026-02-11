# Notion Property Map (Recommended)

## Courses database
- Course Code: `Title`
- Course Name: `Text`
- Start Date: `Date`
- End Date: `Date`
- Target Grade %: `Number`
- Credits: `Number`
- Instructor: `Text`
- Office Hours: `Text`
- Status: `Select` (Active, Paused, Completed)

## Assignments database
- Task Name: `Title`
- Course: `Relation -> Courses`
- Module: `Text`
- Week: `Number`
- Type: `Select` (Discussion, Quiz, Paper, Project, Exam, Reading)
- Due Date: `Date`
- Status: `Select` (Not Started, In Progress, Waiting, Submitted, Graded)
- Priority: `Select` (High, Medium, Low)
- Estimated Hours: `Number`
- Actual Hours: `Number`
- Grade Weight %: `Number`
- Target Score %: `Number`
- Actual Score %: `Number`
- Points Earned: `Number`
- Points Possible: `Number`
- Needs Attention: `Checkbox`
- Notes: `Text`

## Weekly Sprints database
- Week: `Title`
- Primary Outcome: `Text`
- Must Do 1/2/3: `Text`
- Buffer Block: `Text`
- Status: `Select` (Planned, Active, Review, Completed)
- Wins: `Text`
- Blockers: `Text`
- Focus Course: `Relation -> Courses`

## Study Blocks database
- Block Name: `Title`
- Week: `Number`
- Day: `Select` (Mon, Tue, Wed, Thu, Fri, Sat, Sun)
- Start Time: `Text`
- End Time: `Text`
- Duration (hrs): `Number`
- Block Type: `Select` (Reading, Drafting, Revision, Submission, Buffer)
- Linked Task: `Relation -> Assignments`
- Planned: `Checkbox`
- Completed: `Checkbox`
- Notes: `Text`