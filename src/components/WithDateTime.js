import moment from "moment/moment";


export default function withDateTime(Component) {
    function Wrapper(props) {
        const { date } = props;
        const updatedDate = moment(date).fromNow();
        return <Component { ...props } date={updatedDate}/>
    }
    return Wrapper;
}