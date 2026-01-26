import "./chatbox.scss";
import { Link } from "react-router-dom";
import { ResponsiveContainer, LineChart, Line, Tooltip } from "recharts";


type Props = {
  color: string;
  icon: string;
  title: string;
  number: number | string;
  dataKey: string;
  percentage: number;
  chartData: { [key: string]: any }[];
}

const ChatBox = (props: Props) => {

  return (
    <div className="chartbox">
      <div className="boxInfo">
        <div className="title">
          <img src={props.icon} alt="" />
          <span>{props.number}</span>
        </div>
        <h1>{props.title}</h1>
        <Link to="/" style={{color:props.color}}>
          View all
        </Link>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{display: "none"}}
                position={{ x: 10, y: 70}}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke="#8884d8"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span className="percentage" style={{color:props.percentage < 0 ? "tomato" : "limegreen" }}>{props.percentage}</span>
          <span className="duration">this month</span>
        </div>
      </div>
    </div>
  )
}

export default ChatBox