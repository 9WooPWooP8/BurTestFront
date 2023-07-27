import React, { useEffect } from 'react';
import 'devextreme/data/odata/store';
import DataGrid, {
	Column,
	Pager,
	Paging,
	FilterRow,
	Lookup
} from 'devextreme-react/data-grid';
import CustomStore from 'devextreme/data/custom_store';
import CustomDataSource from 'devextreme/data/data_source';
import { getTelemetry } from '../../api/telemetry';
import { Telemetry as TelemetryType } from '../../api/types';

export default function Telemetry() {
	useEffect(() => {
		const interval = setInterval(async () => {
			let telemetry = await getTelemetry()

			if (telemetry.length < 0)
				return

			let updateList = telemetry.map((t: TelemetryType) => {return { type: "update", data: t, key: t.id }} );

			customDataStore.push(updateList)
		}, 6000);

		return () => clearInterval(interval);
	}, [])
	return (
		<React.Fragment>
			<h2 className={'content-block'}>Телеметрия</h2>

			<DataGrid
				className={'dx-card wide-card'}
				dataSource={customDataStore}
				showBorders={false}
				focusedRowEnabled={false}
				columnAutoWidth={true}
				columnHidingEnabled={true}
			>
				<Paging defaultPageSize={10} />
				<Pager showPageSizeSelector={true} showInfo={true} />
				<FilterRow visible={true} />
				<Column dataField={'id'} width={90} hidingPriority={2} />
				<Column
					dataField={'wellCompanyName'}
					caption={'Название компании'}
					hidingPriority={8}
				/>
				<Column
					dataField={'wellId'}
					caption={'ИД бура'}
					hidingPriority={6}
					width={90}
				/>
				<Column
					dataField={'wellName'}
					caption={'Название бура'}
					hidingPriority={6}
				/>
				<Column
					dataField={'dateTime'}
					caption={'Дата последней активности'}
					hidingPriority={5}
					dataType={'date'}
				>
				</Column>
				<Column
					dataField={'depth'}
					caption={'Глубина'}
					hidingPriority={7}
				/>
			</DataGrid>
		</React.Fragment>
	)
}


const customDataStore = new CustomStore({
	key: 'id',

	load: async () => {
		let telemetry = await getTelemetry()
		return telemetry
	},
});

const customDataSource = new CustomDataSource({
	store: customDataStore,
})
