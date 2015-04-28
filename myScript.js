var amountCells;
function addRow(){
	var tbl = document.getElementById("myTab");           	// таблица, с которой работаем
	var allRows = tbl.rows;									// коллекция существующих строк таблицы
	var lastRow = allRows[allRows.length - 1];   			// последняя (самая нижняя) существующая строка таблицы
		amountCells = lastRow.cells.length;             	// количество ячеек в последней существующей строке 
	var newRow = tbl.insertRow(-1);                    		// добавляем снизу ОБРАЗ ещё одной строки
	for (var i = 0; i < amountCells; i++)               	// создаём цикл из numberCells шагов (по количеству ячеек)
	{
		var newCell = newRow.insertCell(-1);          		// на каждом шаге в образ строки добавляем ОБРАЗ новой ячейки
		newCell.innerHTML = tbl.rows.length + "_" + (i+1); 	// и добавляем в этот образ новой ячейки HTML-код, превращая образ в РЕАЛЬНУЮ ячейку
	}														// по завершению цикла, когда ВСЕ ячейки получат содержимое, ОБРАЗ добавленной строки превратится в РЕАЛЬНУЮ строку
}

function addColumn() {
	var table = document.getElementById ("myTab");			// таблица, с которой работаем
	var allRows = table.rows.length;						// Количество строк
	for (var j=0; j<allRows; j++)							// Прогоняем цикл по количеству строк. В каждую строку в конце вставляем ячейку
	{												
		var inRow = table.rows[j];				
		var cell = inRow.insertCell (-1);
		cell.innerHTML = (j+1) + "_" + (amountCells+1);
	}						
}

function delRow(){ 
	document.getElementById("myTab").deleteRow(-1); 
} 

function delColumn(){
	var table = document.getElementById ("myTab");
	var allRows = table.rows.length;			
	for (var j=0; j<allRows; j++)
	{												
		var inRow = table.rows[j];				
		var delRow = inRow.deleteCell(-1);		
	}	
}

function myFunctiOnMouse(){
	
}
