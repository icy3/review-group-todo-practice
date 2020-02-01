import React from 'react'
import axios from 'axios'
import Job from './Job.js'
import Update from './Update.js'
class App extends React.Component {
constructor(props){
    super(props)
    this.state = {
        stringJob: '',
        jobs: []
        //jobeys: [errands, mow, coldcall]
    };
    this.deleteJob= this.deleteJob.bind(this)
    this.sendJob=this.sendJob.bind(this);
    this.onClickValue=this.onClickValue.bind(this);
    this.onClickHandle=this.onClickHandle.bind(this);
    //
}
componentDidMount(){
    this.getJobs()
}

deleteJob(event){
let id =event.target.value;
axios.delete(`/deleteJob/${id}`)
.then(() => {return this.getJobs();
})
}

getJobs(){
    axios.get('/jobs').then(jobs => this.setState({jobs:jobs.data}));
}

// updateFromDb () {
//     axios.get('/api/categoryFromDb')
//     .then( (response) => {
//       console.log(response.data)
//       this.setState({lastOne:response.data})

//     })
//     .catch(function (error) {
//       console.log(error);
//     });
//   }
    // .catch(function(error){
        //     console.log(error);
        // })
/*
axios.get('/jobs')
  .then(function(response) {
    return axios.all([ axios.get('/jobs'), axios.get('/jobs') ]);
  })
  .then(function(responses) {
    const [
      preferencesResponse,
      rolesResponse
    ] = responses;
    // do more things
  })
  .catch(function(error) {
    console.log(error);
  });
*/
sendJob() {
    axios.post('/jobs', {
        newJob: this.state.stringJob})
        .then(() => {
        // console.log(this.state.stringJob)
        this.getJobs();
        
        //     // console.log(response);
        })
        // .catch(function(error) {
        //     console.log(error);
        // })
        }

//         QQQQQQQQQ
// bigCall () {
// axios.get('/jobs').then(function(response) {
//     return axios.all([ axios.get('/jobs'), axios.get('/jobs') ]);
//   })
//   .then(function(responses) {
//     const [
//       preferencesResponse,
//       rolesResponse
//     ] = responses;
//     // do more things
//   })
//   .catch(function(error) {
//     console.log(error);
//   });
// }

// function makeRequestsFromArray(arr) {
//     let index = 0;
//     function request() {
//         return axios.get('http://localhost:3000/api/' + index).then(() => {
//             index++;
//             if (index >= arr.length) {
//                 return 'done'
//             }
//             return request();
//         });

//     }
//     return request();
// }

// makeRequestsFromArray([0, 1, 2]);
//          WQQQQQQQQQQQQ

    onClickValue(event){
    
        this.setState({
            stringJob:event.target.value
        })
    }

    onClickHandle() {
        let temp = this.state.jobs
        temp.push(this.state.stringJob)
        this.setState({jobs:this.state.temp})
    }

    render() {
         return (
             <div>
                 <Update jobs={this.state.jobs} />
             
                <input value={this.state.stringJob} onChange={this.onClickValue} />
                <button onClick = {this.sendJob} >Add Jobs</button> 
           
                {this.state.jobs.map(item => {
                     return (
                        <Job 
                        key={item.id}
                        id={item.id} 
                        item={item.item} 
                        deleteJob={this.deleteJob} 
                        />
                        
                        
                        
                        )
                    })}
                  
                  </div>
         )
              }
            }
export default App

//this.state.stringJob === the current thing on the frontend