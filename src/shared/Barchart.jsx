import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import { LinePlot, MarkPlot } from '@mui/x-charts/LineChart';
import { BarPlot } from '@mui/x-charts/BarChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { ChartsGrid } from '@mui/x-charts/ChartsGrid';
import { ChartsTooltip } from '@mui/x-charts/ChartsTooltip';

const dataset = [
    { max: 8000,range:4000, month: 'Jan' },
    { max: 4000,range:5000, month: 'Feb' },
    { max: 1000,range:8000, month: 'Mar' },
    { max: 10000,range:3000, month: 'Apr' },
    { max: 9000,range:11000, month: 'Mai' },
    { max: 8000,range:7000, month: 'Jun' },
    { max: 2000,range:4000, month: 'Jul' },
    { max: 3000,range:6000, month: 'Aug' },
    { max: 5000,range:8000, month: 'Sept' },
    { max: 6000,range:5000, month: 'Oct' },
    { max: 5000,range:6000, month: 'Nov' },
    { max: 4000,range:9000, month: 'Dec' },
];

const series = [
    { type: 'line', dataKey: 'max', color: 'rgba(0, 43, 85, 0.74)' },
    { type: 'bar', dataKey: 'range', color: 'rgba(39, 122, 204, 1)' , },
];

export default function BarChartGraph() {
    const [reverseX, setReverseX] = React.useState(false);
    const [reverseLeft, setReverseLeft] = React.useState(false);
    const [reverseRight, setReverseRight] = React.useState(false);

    return (
        <Stack sx={{ width: '100%',marginLeft:"17px" }}>
            <Box sx={{ width: '100%' }}>
                <ResponsiveChartContainer
                    xAxisWidth={ 80}
                    series={series}
                    xAxis={[
                        {
                            scaleType: 'band',
                            dataKey: 'month',
                            reverse: reverseX,
                            tickSize:45
                        },
                    ]}
                    yAxis={[
                        { id: 'leftAxis', reverse: reverseLeft },
                        // { id: 'rightAxis', reverse: reverseRight },
                    ]}
                    dataset={dataset}
                    height={300}
                >
                    <ChartsGrid horizontal />
                    <BarPlot/>
                    <LinePlot />
                    {/* <MarkPlot /> */}

                    <ChartsXAxis />
                    <ChartsYAxis axisId="leftAxis"/>
                    {/* <ChartsYAxis
            axisId="rightAxis"
            position="right"
            label="precipitation (mm)"
          /> */}
                    <ChartsTooltip />
                </ResponsiveChartContainer>
            </Box>
        </Stack>
    );
}
