// git status - git shows special changes to repo's 

// You have to add files to the repo to change the status

// git has a staging area to add files. then you can run
//  'git commit' to make sure that the git add commits work
// '-a' means 'all' like "git commit -a" commits all the files
// to the staging area 

// ------History------

// you can use 'git log' to show all of the commits
// You can also check out a commit using 'git checkout' 
// 'Detached Head' is a warning to you to not make any changes
// you can't turn back time 
// You can checkout the master branch by doing "git checkout master"
// You can also checkout the differences between two commits
// by using "git diff" + two commit names

// ---------Branching-------

// Basics of Branches

// You can create a branch by using "git branch <name>"
// To change to the different branches, you can use "checkout"
// so for the branch <newbranch> use "git checkout newbranch"

// To commit to the new branch, make sure you're in the new branch
// and commit to the new branch. eventually you can merge 
// these two branches. 

// You can use git checkout -b <name> to get to the branch 
// from the master

// How do you keep track of all the branches? 
// Run "git branch" and it will give you a list of the 
// branches. You can run "git branch -D <branchname>" to delete that branch
// You have to be in another branch to delete a branch. 

// -----------Merging in Git-------------

// Being able to bring branches back to one unified branch
// is needed. You have to combine the branch in a unified order
// Let's merge a branch to the master'
// Use "git merge <branchname>"

// -----------Conflicts in Merge --------------

// To let git know about the resolve, you just need to add
// to the staging area, and then commit it

// --------------Working with Remotes-------------

// to clone a repository use "git clone <reponame> <clonedir>"
// "git remote" will tell you what remote repositories you have


// --------------Pushing and Pulling Repositories-------------

// Pushing
// "git push <remote> <branchname>" will push the repo to a new branch





// Pulling

// "git pull <remote> <branchname>" will pull another repository
// and will merge (if possible)


// ---------------Day to Day--------------

// Master Branch === Canonical Branch

// Feature branches are used with 

// -A New Feature
// -A Big refactor/redesign
// -Substantial change

// You can keep your work isolated

// ---------------gitflow------------------

// "git flow feature start feature_name" = start a new project
// "git flow feature finish feature_name" = end of project
// Hot Fixes:

// "git flow hotfix start <name>"





















