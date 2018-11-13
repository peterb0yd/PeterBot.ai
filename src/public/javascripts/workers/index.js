
/**
 * Handler for incoming worker messages
 */
onmessage = async (e) => {
  [lead, args] = parseCommands(e)
  try {
    funcs[lead](args)
  } catch (e) {
    postMessage({ error: 'Command not found' })
  }
}

/**
*  @func:    promarseCommands
*  @desc:    Pull command from data and parse arguments
*  @params:  e <Object> - e.data holds the data we need
*  @return:  [lead, args] - array containing the lead command and arguments
*/
const parseCommands = (e) => {
  const command = e.data.split(' ')
  const lead = command[0]
  const args = command.slice(1, command.length)
  return [lead, args]
}

/**
 *  @desc:  List of possible commands
 *  @note:  first word in command must match one of these keys
 */
const funcs = {
  'space':    args => goToSpace(args),
  'google':   args => goToGoogle(args),
}


const goToSpace = (args) => {
  postMessage("GO TO SPACE!")
}

const goToGoogle = (args) => {
  postMessage("GO TO GOOGLE")
}
