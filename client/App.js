import React from 'react'
import axios from 'axios'
import Job from './Job.js'

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



////

////
getJobs(){
    axios.get('/jobs').then(jobs => this.setState({jobs:jobs.data}));
}
    // .catch(function(error){
        //     console.log(error);
        // })
//
sendJob() {
    axios.post('/jobs', {
        newJob: this.state.stringJob})
        .then(() => {
        // console.log(this.state.stringJob)
        this.getJobs();
        
        //     // console.log(response);
        // })
        // .catch(function(error) {
        //     console.log(error);
        // })
        })}

    onClickValue(event){
        event.preventDefault();
        this.setState({
            stringJob:event.target.value
        })
    }

    onClickHandle() {
        let temp = this.state.jobs
        temp.push(this.state.stringJob)
        this.setState({jobs:this.state.temp, stringJob:''})
    }

    render() {
         return (
             <div>
                <input value={this.state.stringJob} onChange={this.onClickValue} />
                <button onClick = {this.sendJob} onChange={this.onClickHandle}>Add Jobs</button> 
                {this.state.jobs.map((item,index) => {
                     return (
                        <Job 
                        key={index}
                        id={item.id} 
                        item={item} 
                        deleteJob={this.deleteJob}
                        />
                      
                        
                        )
                    })}
                  
                  </div>
         )
              }
            }
export default App

//this.state.stringJob