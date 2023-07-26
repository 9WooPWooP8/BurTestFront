import React from 'react';
import 'devextreme/data/odata/store';
import DataGrid, {
	Column,
	Pager,
	Paging,
	FilterRow,
	Lookup
} from 'devextreme-react/data-grid';
import CustomStore from 'devextreme/data/custom_store';

export default function Wells() {
	return (
		<React.Fragment>
			<h2 className={'content-block'}>Скважины</h2>

			<DataGrid
				className={'dx-card wide-card'}
				dataSource={customDataSource}
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
					dataField={'name'}
					caption={'Название'}
					hidingPriority={8}
				/>
				<Column
					dataField={'companyName'}
					caption={'Компания'}
					hidingPriority={6}
				/>
				<Column
					dataField={'telemetryDateTime'}
					caption={'Дата последней активности'}
					hidingPriority={5}
					dataType={'date'}
				>
				</Column>
				<Column
					dataField={'telemetryDepth'}
					caption={'Глубина'}
					hidingPriority={7}
				/>
				<Column
					dataField={'active'}
					caption={'Активна'}
					dataType={'boolean'}
					hidingPriority={7}
				/>
			</DataGrid>
		</React.Fragment>
	)
}

const customDataSource = new CustomStore({
	key: 'id',
	load: async () => {
		const response = await fetch('http://localhost:5055/Well/detailed/active');
		return response.json();
	}
});
