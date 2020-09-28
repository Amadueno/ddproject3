import React, { useState } from 'react'
import './dndstyles.css'

// import User from '../User/User.js'
import {
  FormGroup,
  Label,
  Col,
  Input,
  Button,
} from 'reactstrap'

const Character = () => {
  const [characterState, setCharacterState] = useState({
    name: ' ',
    class: ' ',
    background: ' ',
    race: ' ',
    faction: ' ',
    alignment: ' ',
    exp: ' ',
    character: []
  })

  const randClass =['barbarian', 'bard', 'cleric', 'druid', 'fighter', 'monk', 'paladin', 'ranger', 'rogue', 'sorcerer', 'warlock', 'wizard']
  const randRace = ['dragonborn', 'dwarf', 'elf', 'gnome', 'half-elf', 'halfling', 'half-orc', 'human', 'tiefling']
  const randBackground = ['acolyte', 'charlatan', 'criminal', 'entertainer', 'folk hero', 'guild artisan', 'hermit', 'outlander', 'noble', 'sage', 'sailor', 'solider', 'urchin']
  const randAlignment = ['lawful good', 'neutral good', 'chaotic good', 'lawful neutral', 'neutral', 'chaotic neutral', 'lawful evil',' neutral evil', 'chaotic evil']
  const randFaction = ['Harpers', 'Order of the Gauntlet', 'Emerald Enclave', 'Lords Alliance', 'Zhentarim']

  var Generate = {
    
  }


  
  characterState.handleInputChange = event => {
    setCharacterState({ ...characterState, [event.target.name]: event.target.value })
    console.log('hi')
  }
  characterState.handleCreateCharacter = event => {
    event.preventDefault()
    // axios.post
    // send the req.body=characterState
  }
  return (
    <div className='d-and-d-character-sheet container-xl mt-5 mb-5'>
      <h3>Character Sheet</h3>
      <div>
        <div className='row mb-4'>
          <div className='col-md-3 pr-2 pl-2'>
            <div className='d-and-d-page-title'></div>
            <div className='d-and-d-attribute-collection char-name pr-3 pl-3'>
              <Input type="characterName" name="characterName" id="CharacterName" value={localStorage.getItem('name')} />
            </div>
            <label
              style={{
                width: '100%',
                textAlign: 'right',
                textTransform: 'uppercase',
                fontSize: '11px'
              }}
            >
              Character Name
            </label>
          </div>
          <div className='col-md-9 pr-2 pl-2'>
            <div className='d-and-d-attribute-collection pr-3 pl-3'>
              <div className='row pl-3 pr-3'>
                <div className='col-md-3 col-6 pl-0 pr-0'>
                  <Input type="class" name="class" id="Class" value={localStorage.getItem('class')} />
                  <label
                    style={{
                      width: '100%',
                      textAlign: 'right',
                      textTransform: 'uppercase',
                      fontSize: '11px'
                    }}>Class & Level</label>
                </div>
                <div className='col-md-3 col-6 pl-0 pr-0'>
                  <Input type="background" name="background" id="background" value={localStorage.getItem('background')} />
                  <label
                    style={{
                      width: '100%',
                      textAlign: 'right',
                      textTransform: 'uppercase',
                      fontSize: '11px'
                    }}>Background</label>
                </div>
                <div className='col-md-3 col-6 pl-0 pr-0'>
                  <Input type="faction" name="faction" id="faction" value={localStorage.getItem('faction')} />
                  <label
                    style={{
                      width: '100%',
                      textAlign: 'right',
                      textTransform: 'uppercase',
                      fontSize: '11px'
                    }}>Faction</label>
                </div>
              </div>
              <div className='row pl-3 pr-3'>
                <div className='col-md-3 col-6 pl-0 pr-0'>
                  <Input type="race" name="race" id="Race" value={localStorage.getItem('race')} />
                  <label
                    style={{
                      width: '100%',
                      textAlign: 'right',
                      textTransform: 'uppercase',
                      fontSize: '11px'
                    }}>Race</label>
                </div>
                <div className='col-md-3 col-6 pl-0 pr-0'>
                  <Input type="alignment" name="alignment" id="Alignment" value={localStorage.getItem('alignment')} />
                  <label
                    style={{
                      width: '100%',
                      textAlign: 'right',
                      textTransform: 'uppercase',
                      fontSize: '11px'
                    }}>Alignment</label>
                </div>
                <div className='col-md-3 col-6 pl-0 pr-0'>
                  <Input type="exp" name="exp" id="Exp" value={localStorage.getItem('exp')} />
                  <label
                    style={{
                      width: '100%',
                      textAlign: 'right',
                      textTransform: 'uppercase',
                      fontSize: '11px'
                    }}>Experience Points</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button color='danger' onClick={characterState.handleCreateCharacter}
        style={{
          margin: '5px',
          marginBottom: '20px'
        }}>Create Character</Button>
        <Button color='danger' onClick={characterState.handleCreateCharacter}
        style={{
          margin: '5px',
          marginBottom: '20px'
        }}>Random Character</Button>
        <div className='row'>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-4 pr-1'>
                <div className='d-and-d-box gray'>
                  <div>
                    <div className={'d-and-d-statbox'}>
                      <label>Strength</label>
                      <div className='d-and-d-statbox-modifier'></div>
                    </div>
                    <div className='d-and-d-statbox-value'>
                      <input
                        type='text'
                      />
                    </div>
                  </div>
                  <div>
                    <div className={'d-and-d-statbox'}>
                      <label>Dexterity</label>
                      <div className='d-and-d-statbox-modifier'></div>
                    </div>
                    <div className='d-and-d-statbox-value'>
                      <input
                        type='text'
                      />
                    </div>
                  </div>
                  <div>
                    <div className={'d-and-d-statbox'}>
                      <label>Constitution</label>
                      <div className='d-and-d-statbox-modifier'></div>
                    </div>
                    <div className='d-and-d-statbox-value'>
                      <input
                        type='text'
                      />
                    </div>
                  </div>
                  <div>
                    <div className={'d-and-d-statbox'}>
                      <label>Intelligence</label>
                      <div className='d-and-d-statbox-modifier'></div>
                    </div>
                    <div className='d-and-d-statbox-value'>
                      <input
                        type='text'
                      />
                    </div>
                  </div>
                  <div>
                    <div className={'d-and-d-statbox'}>
                        <label>Wisdom</label>
                        <div className='d-and-d-statbox-modifier'></div>
                    </div>
                    <div className='d-and-d-statbox-value'>
                      <input
                        type='text'
                      />
                    </div>
                  </div>
                  <div>
                    <div className={'d-and-d-statbox'}>
                        <label>Charisma</label>
                        <div className='d-and-d-statbox-modifier'></div>
                    </div>
                    <div className='d-and-d-statbox-value'>
                        <input
                          type='text'
                        />
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-8'>
                <div className='d-and-d-statrow'>
                  <div className='d-and-d-statrow-value'>
                    <input
                      type='text'/>
                  </div>
                  <div className='d-and-d-statrow-label'>
                    <label>Inspiration</label>
                  </div>
                </div>
                <div className='d-and-d-statrow'>
                  <div className='d-and-d-statrow-value'>
                    <input
                      type='text' />
                  </div>
                  <div className='d-and-d-statrow-label'>
                    <label>Proficiency Bonus</label>
                  </div>
                </div>
                <div className='d-and-d-box'>
                  <div className='d-and-d-skill'>
                    <input type='checkbox' />
                    <input type='text' />
                    <label>Strength</label>
                  </div>
                  <div className='d-and-d-skill'>
                    <input type='checkbox' />
                    <input type='text' />
                    <label>Dexterity</label>
                  </div>
                  <div className='d-and-d-skill'>
                    <input type='checkbox' />
                    <input type='text' />
                    <label>Constitution</label>
                  </div>
                  <div className='d-and-d-skill'>
                    <input type='checkbox' />
                    <input type='text' />
                    <label>Intelligence</label>
                  </div>
                  <div className='d-and-d-skill'>
                    <input type='checkbox' />
                    <input type='text' />
                    <label>Widsom</label>
                  </div>
                  <div className='d-and-d-skill'>
                    <input type='checkbox' />
                    <input type='text' />
                    <label>Charisma</label>
                  </div>
                  <label className='d-and-d-title'
                    style={{ marginTop: '10px' }}>
                    Saving Throws
                  </label>
                </div>
                <div className="d-and-d-box">
                  <div style=
                  {{ textAlign: 'left'}}>
                    <div className='d-and-d-skill'>
                      <input type='checkbox' />
                      <input type='text'/>
                      <label>Acrobatics</label>
                      <span className='d-and-d-skill-hint'>Dex</span>
                    </div>

                    <div className='d-and-d-skill'>
                      <input type='checkbox' />
                      <input type='text' />
                      <label>Animal Handling</label>
                      <span className='d-and-d-skill-hint'>Wis</span>
                    </div>
                    <div className='d-and-d-skill'>
                      <input type='checkbox' />
                      <input type='text' />
                      <label>Acrobatics</label>
                      <span className='d-and-d-skill-hint'>Dex</span>
                    </div>
                    <div className='d-and-d-skill'>
                      <input type='checkbox' />
                      <input type='text' />
                      <label>Arcana</label>
                      <span className='d-and-d-skill-hint'>Int</span>
                    </div>
                    <div className='d-and-d-skill'>
                      <input type='checkbox' />
                      <input type='text' />
                      <label>Athletics</label>
                      <span className='d-and-d-skill-hint'>Str</span>
                    </div>
                    <div className='d-and-d-skill'>
                      <input type='checkbox' />
                      <input type='text' />
                      <label>Deception</label>
                      <span className='d-and-d-skill-hint'>Cha</span>
                    </div>
                    <div className='d-and-d-skill'>
                      <input type='checkbox' />
                      <input type='text' />
                      <label>History</label>
                      <span className='d-and-d-skill-hint'>Int</span>
                    </div>
                    <div className='d-and-d-skill'>
                      <input type='checkbox' />
                      <input type='text' />
                      <label>Intimidation</label>
                      <span className='d-and-d-skill-hint'>Cha</span>
                    </div>
                    <div className='d-and-d-skill'>
                      <input type='checkbox' />
                      <input type='text' />
                      <label>Investigation</label>
                      <span className='d-and-d-skill-hint'>Int</span>
                    </div>
                    <div className='d-and-d-skill'>
                      <input type='checkbox' />
                      <input type='text' />
                      <label>Medicine</label>
                      <span className='d-and-d-skill-hint'>Wis</span>
                    </div>
                    <div className='d-and-d-skill'>
                      <input type='checkbox' />
                      <input type='text' />
                      <label>Nature</label>
                      <span className='d-and-d-skill-hint'>Int</span>
                    </div>
                    <div className='d-and-d-skill'>
                      <input type='checkbox' />
                      <input type='text' />
                      <label>Perception</label>
                      <span className='d-and-d-skill-hint'>Wis</span>
                    </div>
                    <div className='d-and-d-skill'>
                      <input type='checkbox' />
                      <input type='text' />
                      <label>Performance</label>
                      <span className='d-and-d-skill-hint'>Cha</span>
                    </div>
                    <div className='d-and-d-skill'>
                      <input type='checkbox' />
                      <input type='text' />
                      <label>Persuasion</label>
                      <span className='d-and-d-skill-hint'>Cha</span>
                    </div>
                    <div className='d-and-d-skill'>
                      <input type='checkbox' />
                      <input type='text' />
                      <label>Religion</label>
                      <span className='d-and-d-skill-hint'>Int</span>
                    </div>
                    <div className='d-and-d-skill'>
                      <input type='checkbox' />
                      <input type='text' />
                      <label>Sleight of Hand</label>
                      <span className='d-and-d-skill-hint'>Dex</span>
                    </div>
                    <div className='d-and-d-skill'>
                      <input type='checkbox' />
                      <input type='text' />
                      <label>Stealth</label>
                      <span className='d-and-d-skill-hint'>Dex</span>
                    </div>
                    <div className='d-and-d-skill'>
                      <input type='checkbox' />
                      <input type='text' />
                      <label>Survival</label>
                      <span className='d-and-d-skill-hint'>Wis</span>
                    </div>
                  </div>
                  <Label
                    className="d-and-d-title"
                    style={{ marginTop: '10px' }}>
                    Skills
                  </Label>
                </div>
              </div>
            </div>
            <div className='mt-2'>
              <div className='d-and-d-statrow'>
                <div className='d-and-d-statrow-value'>
                  <input
                    type='text' />
                </div>
                <div className='d-and-d-statrow-label'>
                  <label>Passive Wisdom (Perception)</label>
                </div>
              </div>
            </div>
            <div className='d-and-d-box mt-4'>
              <textarea
                rows={12} />
              <label className='d-and-d-title' style={{ marginTop: '10px' }}>
                Other Proficiencies and Languages
            </label>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='d-and-d-box gray'>
              <div className='row'>
                <div className='col-4 pr-2'>
                  <div>
                    <div className={'d-and-d-statbox type2'}>
                      <div className='d-and-d-statbox-modifier'>
                        <input
                          type='text' />
                      </div>
                      <div>
                        <label className='label-top'>{'Armour Class'}</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-4 pr-2'>
                  <div>
                    <div className={'d-and-d-statbox type2'}>
                      <div className='d-and-d-statbox-modifier'>
                        <input
                          type='text' />
                      </div>
                      <div>
                        <label className='label-top'>{'Initiative'}</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-4 pr-2'>
                  <div>
                    <div className={'d-and-d-statbox type2'}>
                      <div className='d-and-d-statbox-modifier'>
                        <input
                          type='text' />
                      </div>
                      <div>
                        <label className='label-top'>{'Speed'}</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='d-and-d-box white'
              style={{
                borderRadius: '8px 8px 0 0',
                marginBottom: '5px',
                paddingBottom: '5px'
              }}
            >
                <div className='d-and-d-gray-text'>
                <label style={{ width: '95px' }}>Hit Point Maximum</label>
                <Input type='text'
                  style={{ width: 'calc(100% = 95px)' }}
                  className='d-and-d-linput' />
              </div>
              <Input
                type='text'
                className='d-and-d-cinput' />
              <label className='d-and-d-title' style={{ marginTop: '5px' }}>Current Hit Points</label>
            </div>
            <div className='d-and-d-box white mb-2'
              style={{ borderRadius: '0 0 8px 8px', paddingBottom: '5px' }}>
              <input type='text'></input>
              <label className='d-and-d-title' style={{ marginTop: '5px' }}>Temporary Hit Points</label>
            </div>
            <div className='row mt-1'>
              <div className='col-6 pr-1'>
                <div className='d-and-d-box white mb-0'
                  style={{ paddingBottom: '5px' }}>
                  <div className='d-and-d-gray-text'>
                    <label style={{ width: '25px' }}>Total</label>
                    <input type='text'
                      style={{ width: 'calc(100% - 25px' }}
                      className='d-and-d-linput'></input>
                  </div>
                  <input
                    type='text'
                    className='d-and-d-cinput'></input>
                  <label className='d-and-d-title'
                    style={{ marginTop: '5px' }}>Hit Dice</label>
                </div>
              </div>
              <div className='col-6 pl-1'>
                <div className='d-and-d-box white mb-0'>
                  <div className= 'd-and-d-deathsave'>
                  <FormGroup check inline>
                    <Label style={{
                    marginBottom: '5px'
                    }}check>
                      Sucesses
                  <Input type="checkbox" />
                    </Label>
                    <Label check>
                      <Input type="checkbox" />
                    </Label>
                    <Label check>
                      <Input type="checkbox" />
                    </Label>
                  </FormGroup>
                  <FormGroup check inline>
                    <Label check>
                      Failures
                      <Input type="checkbox" />
                    </Label>
                    <Label check>
                      <Input type="checkbox" />
                    </Label>
                    <Label check>
                      <Input type="checkbox" />
                    </Label>
                  </FormGroup>
                  </div>
                  <label className='d-and-d-title'
                    style={{ marginTop: '6px' }}>
                    Death Saves
                  </label>
                </div>
              </div>
            </div>
          </div>
        <div className='d-and-d-box mt-3'>
            <table className='d-and-d-table'>
              <thead className='d-and-d-table'>
                <tr>
                  <th>Name </th>
                  <th style={{ width: '70px' }}>Atk Bonus</th>
                  <th>Damage/Type</th>
                </tr>
              </thead>
            </table>
              <tr className='d-and-d-table-row-'>
                <td>
                  <input type='text'/>
                </td>
                <td>
                  <input type='text'/>
                </td>
                <td>
                  <input type='text'/>
                </td>
              </tr>
          <textarea
            rows={6} />
          <label className='d-and-d-title' style={{ marginTop: '10px' }}>
            Attacks & Spellcasting
          </label>
        </div>
        <div className='d-and-d-box mt-4'>
          <div className='row'>
                <div style={{ width: '100px'}}>
                  <div className='d-and-d-currency'>
                    <div className='d-and-d-currency-label'>
                      <label>CP</label>
                    </div>
                    <div className='d-and-d-currency-value'>
                      <input
                        type='text'
                      />
                    </div>
                  </div>
                  <div className='d-and-d-currency'>
                    <div className='d-and-d-currency-label'>
                      <label>SP</label>
                    </div>
                    <div className='d-and-d-currency-value'>
                      <input
                        type='text'
                      />
                    </div>
                  </div>
                  <div className='d-and-d-currency'>
                    <div className='d-and-d-currency-label'>
                      <label>EP</label>
                    </div>
                    <div className='d-and-d-currency-value'>
                      <input
                        type='text'
                      />
                    </div>
                  </div>
                  <div className='d-and-d-currency'>
                    <div className='d-and-d-currency-label'>
                      <label>GP</label>
                    </div>
                    <div className='d-and-d-currency-value'>
                      <input
                        type='text'
                      />
                    </div>
                  </div>
                  <div className='d-and-d-currency'>
                    <div className='d-and-d-currency-label'>
                      <label>PP</label>
                    </div>
                    <div className='d-and-d-currency-value'>
                      <input
                        type='text'
                      />
                    </div>
                  </div>
            </div>
            <div className='col'>
              <textarea
                className='d-and-d-equipment-indent'
                rows={10}></textarea>
            </div>
              <div className='col-md-12'>
                <textarea
                  rows={4}></textarea>
              </div>
            <label className='d-and-d-title' style={{ marginTop: '10px' }}>
              Equipment
            </label>
          </div>
        </div>
        </div>


        <div className='col-md-4'>
          <div className='d-and-d-box gray'
          style={{ marginBottom: '17px'}}>
            <div className='d-and-d-box white'
              style={{
                borderRadius: '8px 8px 0 0',
                marginBottom: '5px',
                paddingTop: '1px',
                paddingBottom: '5px'
              }}>
              <textarea
                rows={3}
              />
              <label className='d-and-d-title'>Personality Traits</label>
              </div>
            <div
              className='d-and-d-box white'
              style={{
                borderRadius: '0 0 0 0',
                marginBottom: '5px',
                paddingTop: '1px',
                paddingBottom: '5px'
              }}>
              <textarea
                rows={3}
              />
              <label className='d-and-d-title'>Ideals</label>
            </div>
            <div
              className='d-and-d-box white'
              style={{
                borderRadius: '0 0 0 0',
                marginBottom: '5px',
                paddingTop: '1px',
                paddingBottom: '5px'
              }}>
              <textarea rows={2}/>
              <label className='d-and-d-title'>Bonds</label>
            </div>
            <div
              className='d-and-d-box white'
              style={{
                borderRadius: '0 0 8px 8px',
                marginBottom: '0px',
                paddingTop: '1px',
                paddingBottom: '4px'
              }}>
              <textarea rows={2}/>
              <label className='d-and-d-title'>Flaws</label>
            </div>
        </div>
          <div className='d-and-d-box mt-3'>
            <textarea
              style={{ paddingBottom: '5px' }}
              rows={27}/>
            <label className='d-and-d-title' style={{ marginTop: '10px' }}>
              Features & Traits
            </label>
          </div>
      </div>
    </div>
  </div>
    <Button color='danger' onClick={characterState.handleCreateCharacter}>Create Character</Button>
</div>
  )
}
export default Character

