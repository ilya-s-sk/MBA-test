import React from 'react';

import ProgrammItem from './components/ProgrammItem/ProgrammItem';
import Spinner from './components/Spinner/Spinner';
import Error from './components/Error/Error';

import './App.scss';

class App extends React.Component {

    state = {
        data: [],
        loading: false,
        error: false
    }

    componentDidMount() {
        this.setState({loading: true})
        fetch('https://ipo-cp.ru/api/v1/bootcamps/605c5f71bc557b46b4f42a56/courses')
            .then(res => res.json())
            .then(res => {
                const data = res.data;
                const items = data.slice(0, 50)
                                  .filter((item, i) => item.title !== data[i+1].title 
                                                       && item.specializedSubjects.length === 10);
                    
                this.setState({
                    loading: false, error: false,
                    data: [...this.state.data, ...items]
                });
            })
            .catch(err => this.setState({loading: false, error: true}));
    }

    componentDidCatch() {
        this.setState({error: true})
    }

    render() {
        const {data, loading, error} = this.state;
        const items = data.map(item =>  {
                        return (
                            <ProgrammItem item={item} key={item._id} />
                        )
                    });

        return (
            <div className="app">
                <h1 className="app__title">Специализированные дисциплины</h1>
                {
                    loading 
                    ? <Spinner/> 
                    : error
                    ? <Error/>  
                    : items
                }
            </div>
        );
    }
}

export default App;
