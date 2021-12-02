import logo from './logo.svg';
import { DatePicker } from '@sberdevices/plasma-ui';
import './App.css';

function App() {
    return (
            <DatePicker
	onChange={
	    (item) => {
		alert(item);
	    }
	}
            min={new Date(1970, 0, 0, 0, 0, 0)}
            max={new Date(2021, 10, 10, 0, 0, 0)} 
            value={new Date(2007, 3, 5, 0, 0, 0)} />
    );
}

export default App;
