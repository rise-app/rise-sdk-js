import { ApiClass } from '../../ApiClass'
import { Command, Action, Upload, Paginate } from '../../metadata'
import { task } from '../../validators/task'
import { COMMANDS, ACTIONS } from '../../enums'

export class ChannelTask extends ApiClass {
  @Command({
    method: 'POST', route: 'channels/:channel_uuid/tasks',
    validator: task[COMMANDS.CREATE_TASK]
  })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({
    method: 'PUT', route: 'channels/:channel_uuid/tasks/:task_uuid',
    validator: task[COMMANDS.UPDATE_TASK]
  })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Given Channel's Task
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/tasks/:task_uuid',
    validator: task[ACTIONS.GET_TASK]
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Channel's Task by Task Handle
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/tasks/handle/:handle',
    validator: task[ACTIONS.FIND_TASK]
  })
  getByHandle(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List All Tasks of a Given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/tasks',
    validator: task[ACTIONS.LIST_TASKS]
  })
  @Paginate()
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Search Tasks for a Given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/search/tasks',
    validator: task[ACTIONS.LIST_TASKS]
  })
  @Paginate()
  search(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List All Tasks from Descendants of given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/descendants/tasks',
    validator: task[ACTIONS.LIST_TASKS]
  })
  @Paginate()
  listChannelDescendants(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Search All Tasks from Descendants of given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/descendants/search/tasks',
    validator: task[ACTIONS.LIST_TASKS]
  })
  @Paginate()
  searchChannelDescendants(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Given Channel's Task's Parent
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/tasks/:task_uuid/parent',
    validator: task[ACTIONS.GET_TASK]
  })
  getParent(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List a Given Channel's Task's Ancestor Tasks
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/tasks/:task_uuid/ancestors',
    validator: task[ACTIONS.LIST_TASKS]
  })
  @Paginate()
  listAncestors(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List a Given Channel's Task's Children Tasks
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/tasks/:task_uuid/children',
    validator: task[ACTIONS.LIST_TASKS]
  })
  @Paginate()
  listChildren(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List a Given Channel's Task's Descendant Tasks
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/tasks/:task_uuid/descendants',
    validator: task[ACTIONS.LIST_TASKS]
  })
  @Paginate()
  listDescendants(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List a Given Channel's Task's Siblings Tasks
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/tasks/:task_uuid/siblings',
    validator: task[ACTIONS.LIST_TASKS]
  })
  @Paginate()
  listSiblings(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  // /**
  //  * Upload a Task CSV to Given Channel
  //  * @param data
  //  * @param req
  //  * @param validated
  //  */
  // @Command({ method: 'POST', route: 'channels/:channel_uuid/uploads/tasks', validator: task[COMMANDS.UPLOAD_TASKS] })
  // @Upload()
  // upload(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }

  // /**
  //  * Process a Given Channel's Tasks Upload Result
  //  * @param data
  //  * @param req
  //  * @param validated
  //  */
  // @Command({ method: 'POST', route: 'channels/:channel_uuid/uploads/tasks/:upload_uuid', validator: task[COMMANDS.PROCESS_UPLOADED_TASKS] })
  // processUpload(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }
  //
  // /**
  //  * Upload a Task Metadata CSV to Given Channel
  //  * @param data
  //  * @param req
  //  * @param validated
  //  */
  // @Command({ method: 'POST', route: 'channels/:channel_uuid/uploads/tasks/metadata', validator: task[COMMANDS.UPLOAD_TASK_METADATA] })
  // @Upload()
  // uploadMetadata(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }
  //
  // /**
  //  * Process a Given Channel's Task Metadata Upload Result
  //  * @param data
  //  * @param req
  //  * @param validated
  //  */
  // @Command({ method: 'POST', route: 'channels/:channel_uuid/uploads/tasks/metadata/:upload_uuid', validator: task[COMMANDS.PROCESS_UPLOADED_TASK_METADATA] })
  // processMetadataUpload(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }
  //
  // /**
  //  * Get a Given Channel's Task Upload Result
  //  * @param data
  //  * @param req
  //  * @param validated
  //  */
  // @Action({ method: 'GET', route: 'channels/:channel_uuid/uploads/tasks/:upload_uuid', validator: task[ACTIONS.GET_TASK_UPLOAD_RESULT] })
  // getUpload(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }
  //
  // /**
  //  * List a Given Channel's Task Upload Results
  //  * @param data
  //  * @param req
  //  * @param validated
  //  */
  // @Action({ method: 'GET', route: 'channels/:channel_uuid/uploads/tasks', validator: task[ACTIONS.LIST_TASK_UPLOAD_RESULTS] })
  // @Paginate()
  // listUploads(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }
  //
  // /**
  //  * Get a Given Channel Task Metadata Upload Result
  //  * @param data
  //  * @param req
  //  * @param validated
  //  */
  // @Action({ method: 'GET', route: 'channels/:channel_uuid/uploads/tasks/metadata/:upload_uuid', validator: task[ACTIONS.GET_TASK_METADATA_UPLOAD_RESULT] })
  // @Paginate()
  // getMetadataUpload(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }
  //
  // /**
  //  * List a Given Channel's Task Metadata Upload Results
  //  * @param data
  //  * @param req
  //  * @param validated
  //  */
  // @Action({ method: 'GET', route: 'channels/:channel_uuid/uploads/tasks/metadata', validator: task[ACTIONS.LIST_TASK_METADATA_UPLOAD_RESULTS] })
  // @Paginate()
  // listMetadataUploads(data, req?, validated?) {
  //   return this.request(req, data, validated)
  // }
}

export class ChannelTaskItem extends ApiClass {

  @Command({
    method: 'POST',
    route: 'channels/:channel_uuid/tasks/:task_uuid/items',
    validator: task[COMMANDS.CREATE_TASK]
  })
  create(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  @Command({
    method: 'PUT',
    route: 'channels/:channel_uuid/tasks/:task_uuid/items/:item_uuid',
    validator: task[COMMANDS.UPDATE_TASK]
  })
  update(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Get a Given Channel's Task
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/tasks/:task_uuid/items/:item_uuid',
    validator: task[ACTIONS.GET_TASK]
  })
  get(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * List All Tasks of a Given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/tasks/:task_uuid/items',
    validator: task[ACTIONS.LIST_TASKS]
  })
  @Paginate()
  list(data, req?, validated?) {
    return this.request(req, data, validated)
  }

  /**
   * Search Tasks for a Given Channel
   * @param data
   * @param req
   * @param validated
   */
  @Action({
    method: 'GET',
    route: 'channels/:channel_uuid/search/tasks/:task_uuid/items',
    validator: task[ACTIONS.LIST_TASKS]
  })
  @Paginate()
  search(data, req?, validated?) {
    return this.request(req, data, validated)
  }
}
