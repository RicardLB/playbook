const issue = {
   title: "a",
   repositoryNameAssociated: "b",
   status: "c",
   numberOfComments: "d",
   labels: "e",
   author: "f",
   dateCreated: "g",
   lastUpdated: "h",
   getTitleAndAuthor: function(){
       return this.title + this.author
    },
   getGeneralInfo: function(){
       return this.repositoryNameAssociated + this.status
    }
}
console.log(issue)
console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())