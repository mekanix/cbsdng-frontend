export default class InstanceStore {
  constructor(detail, list) {
    this.detail = detail[0]
    this.setDetail = detail[1]
    this.list = list[0]
    this.setList = list[1]
  }

  fetchAll = async () => {
    try {
      const response = await window.rest.get('/instances')
      const result = {
        ...response.data,
        ok: true
      }
      this.setList(result)
      return result
    } catch (error) {
      return {
        ...error,
        ok: false,
      }
    }
  }

  fetch = async (id) => {
    try {
      const response = await window.rest.get(`/instances/${id}`)
      const result = {
        ...response.data,
        ok: true
      }
      this.setDetail(result)
      return result
    } catch (error) {
      return {
        ...error,
        ok: false,
      }
    }
  }

  edit = async (id, data) => {
    try {
      const response = await window.rest.patch(`/instances/${id}`, data)
      const result = {
        ...response.data,
        ok: true
      }
      this.setDetail(result)
      return result
    } catch (error) {
      return {
        ...error,
        ok: false,
      }
    }
  }

  create = async (data) => {
    try {
      const response = await window.rest.post('/instances', data)
      const result = {
        ...response.data,
        ok: true
      }
      this.setDetail(result)
      return result
    } catch (error) {
      return {
        ...error,
        ok: false,
      }
    }
  }

  remove = async (id) => {
    try {
      const response = await window.rest.delete(`/instances/${id}`)
      const result = {
        ...response.data,
        ok: true
      }
      this.setDetail(result)
      return result
    } catch (error) {
      return {
        ...error,
        ok: false,
      }
    }
  }
}
