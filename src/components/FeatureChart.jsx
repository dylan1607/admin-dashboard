import "./FeatureChart.scss";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// const FeatureChart = ({ title, data, dataKey, grid }) => {
const FeatureChart = (props) => {
  return (
    <div className="chart">
      <h3 className="chart__title">{props.title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={props.data}>
          <CartesianGrid strokeDasharray="5 5" stroke="#e0dfdf" />
          <XAxis dataKey="name" stroke="#5550bd" />
          <Tooltip />
          {props.grid && (
            <Line
              type="monotone"
              dataKey={props.dataKey}
              stroke="#5550bd"
              activeDot={{ r: 8 }}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FeatureChart;
