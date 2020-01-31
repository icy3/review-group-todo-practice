import React from 'react';
import axios from 'axios'

class App extends React.Component {
constructor(props){
    super(props)
    this.state = {
        stringJob: '',
        jobs: [],
        jobeys: [errands, mow, coldcall]
    };
    this.deleteJob= this.deleteJob.bind(this)
    this.sendJob=this.sendJob.bind(this);
    this.stringJob=this.stringJob.bind(this);
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
    axios.get('/getJobs')
    .then((response) => {
        this.setState({
            jobs:response.data
        })
    })
.catch(function(error){
    console.log(error);
})
}

sendJob() {
    axios.post('/jobs', {
        newJob: this.state.stringJob})
        .then((response) => {
            console.log(response);
            this.setState({stringJob:''})
            this.getJobs();
        })
        .catch(function(error) {
            console.log(error);
        })
        }

    onClickValue(event){
        this.setState({
            stringJob:event.target.value
        })
    }

    render() {
         return (
             <div>
                <input value={this.state.stringJob} onChange={this.onClickValue} />
                <button onClick = {this.sendJob}>Add Jobs</button> 
                {this.state.jobs.map(item => {
                     return (
                        <Job key={item.id} 
                        id={item.id} 
                        item={item.item} 
                        deleteJob={this.deleteJob}/>
                     )
                    })}
                  </div>
         )
              }
            }
export default App