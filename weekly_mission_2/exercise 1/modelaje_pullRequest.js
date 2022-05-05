const PullRequest = {
    title: "a",
    branchName: "b",
    dateCreated: "c",
    numberOfComments: "d",
    status: "e",
    repositoryNameAssociated: "f",
    getStatus: function(){
        return this.status
     },
    getTitleAndAutor: function(){
        return this.title + " "+  "author"
     }
 }
 console.log(PullRequest)
 console.log(PullRequest.getStatus())
 console.log(PullRequest.getTitleAndAutor())