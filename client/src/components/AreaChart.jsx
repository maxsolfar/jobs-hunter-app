import { Flex } from '@chakra-ui/react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const AreaChartComponent = ({data}) => {
  return (
    <ResponsiveContainer width='100%' height={270}>
      <AreaChart
        data={data}
        margin={{
          top: 50,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Area type="monotone" dataKey="count" stroke="#2ABEB3" fill="#56f0e5" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
