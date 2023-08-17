import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GuiColumn, GuiDataType } from '@generic-ui/ngx-grid';

@Component({
	templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataGridComponent implements OnInit {

	total_count: any;

	items = [];

	columns: Array<GuiColumn> = [{
		header: 'Full name',
		field: 'full_name',
		type: GuiDataType.STRING
	}, {
		header: 'Description',
		field: 'description',
		type: GuiDataType.STRING
	}, {
		header: 'Language',
		field: 'language',
		type: GuiDataType.STRING
	}, {
		header: 'Owner',
		field: (item: any) => item.owner.login,
		type: GuiDataType.STRING
	}, {
		header: 'Stars',
		field: 'stargazers_count',
		type: GuiDataType.NUMBER,
		width: 100
	}, {
		header: 'Forks',
		field: 'forks',
		type: GuiDataType.NUMBER,
		width: 100
	}];

	searchForm: FormGroup;

	fetching = false;

	constructor(private http: HttpClient,
				private formBuilder: FormBuilder,
				private changeDetectorRef: ChangeDetectorRef) {
	}

	ngOnInit() {

		this.searchForm = this.formBuilder.group({
			'query': ['Tetris', [Validators.required]]
		});

		this.search();
	}

	submit(): void {
		this.search();
	}

	search(): void {

		if (this.fetching) {
			return;
		}

		this.fetching = true;

		this.http
			.get('https://api.github.com/search/repositories?per_page=100&q=' + this.searchForm.value.query)
			.subscribe((response: any) => {

				this.total_count = response.total_count;
				this.items = response.items;

				this.fetching = false;
				this.changeDetectorRef.detectChanges();
			});
	}

}


