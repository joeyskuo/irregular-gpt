
class DataStore {

    constructor() {
        this._data = {};
        this._updateDataFunction = null;
    }

    getData() {
        return this._data;
    }

    setData(newData) {
        this._data = newData;
        this._updateDataFunction?.(this._data);
    }

    setUpdateDataFunction(updateDataFunction) {
        this._updateDataFunction = updateDataFunction;
    }

}

export default DataStore;