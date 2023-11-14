import moment from "moment/moment";
import 'moment/locale/ru';


export default function withDateTime(Component) {
    function Wrapper(props) {
        const { date } = props;
        const updatedDate = moment(date).locale('ru').fromNow();
        return <Component { ...props } date={updatedDate}/>
    }
    return Wrapper;
}