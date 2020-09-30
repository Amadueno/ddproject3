import React, { useState } from 'react'
import './dndstyles.css'
import axios from 'axios'

// import User from '../User/User.js'
import {
  FormGroup,
  Label,
  Col,
  Input,
  Button
} from 'reactstrap'

const randClasses = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard']
const randRaces = ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-elf', 'Halfling', 'Half-orc', 'Human', 'Tiefling']
const randBackgrounds = ['Acolyte', 'Charlatan', 'Criminal', 'Entertainer', 'Folk Hero', 'Guild Artisan', 'Hermit', 'Outlander', 'Noble', 'Sage', 'Sailor', 'Soldier', 'Urchin']
const randAlignments = ['Lawful Good', 'Neutral Good', 'Chaotic good', 'Lawful Neutral', 'Neutral', 'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil', 'Chaotic Evil']
const randFactions = ['Harpers', 'Order of the Gauntlet', 'Emerald Enclave', 'Lords Alliance', 'Zhentarim']
var Generate = {
}

const Character = () => {
  localStorage.setItem('failures', 0)

  const [characterState, setCharacterState] = useState({
    name: localStorage.getItem('name'),
    class: localStorage.getItem('class'),
    background: localStorage.getItem('background'),
    race: localStorage.getItem('race'),
    faction: localStorage.getItem('faction'),
    alignment: localStorage.getItem('alignment'),
    exp: localStorage.getItem('exp'),
    proficiency: ' ',
    inspiration: ' ',
    strength: ' ',
    athletics: ' ',
    dexterity: ' ',
    acrobatics: ' ',
    sleight_of_hand: ' ',
    stealth: ' ',
    constitution: ' ',
    intelligent: ' ',
    arcana: ' ',
    history: ' ',
    investigation: ' ',
    nature: ' ',
    religion: ' ',
    wisdom: ' ',
    animal_handling: ' ',
    insight: ' ',
    medicine: ' ',
    perception: ' ',
    other_pro_lang: ' ',
    survival: ' ',
    charisma: ' ',
    deception: ' ',
    intimidation: ' ',
    performance: ' ',
    persuasion: ' ',
    armor_class: ' ',
    initiative: ' ',
    speed: ' ',
    HP: ' ',
    temp_HP: ' ',
    hit_dice: ' ',
    death_save: ' ',
    successes: ' ',
    failures: ' ',
    att_spell_name: ' ',
    att_spell_bonus: ' ',
    att_spell_type: ' ',
    CP: ' ',
    SP: ' ',
    EP: ' ',
    GP: ' ',
    PP: ' ',
    equipments: ' ',
    traits: ' ',
    ideals: ' ',
    bonds: ' ',
    flaws: ' ',
    character: []
  })

  characterState.handleRandomize = event => {
    const randClass = randClasses[Math.floor(Math.random() * randClasses.length)]
    const randRace = randRaces[Math.floor(Math.random() * randRaces.length)]
    const randBackground = randBackgrounds[Math.floor(Math.random() * randBackgrounds.length)]
    const randAlignment = randAlignments[Math.floor(Math.random() * randAlignments.length)]
    const randFaction = randFactions[Math.floor(Math.random() * randFactions.length)]
    localStorage.setItem('class', randClass)
    localStorage.setItem('race', randRace)
    localStorage.setItem('background', randBackground)
    localStorage.setItem('alignment', randAlignment)
    localStorage.setItem('faction', randFaction)
    setCharacterState({
      ...characterState,
      name: localStorage.getItem('name'),
      class: randClass,
      race: randRace,
      background: randBackground,
      alignment: randAlignment,
      faction: randFaction,
      exp: localStorage.getItem('exp'),
      proficiency: localStorage.getItem('proficiency'),
      inspiration: localStorage.getItem('inspiration'),
      strength: localStorage.getItem('strength'),
      athletics: localStorage.getItem('athletics'),
      dexterity: localStorage.getItem('dexterity'),
      acrobatics: localStorage.getItem('acrobatics'),
      sleight_of_hand: localStorage.getItem('sleight_of_hand'),
      stealth: localStorage.getItem('stealth'),
      constitution: localStorage.getItem('constitution'),
      intelligent: localStorage.getItem('intelligent'),
      arcana: localStorage.getItem('arcana'),
      history: localStorage.getItem('history'),
      investigation: localStorage.getItem('investigation'),
      nature: localStorage.getItem('nature'),
      religion: localStorage.getItem('religion'),
      wisdom: localStorage.getItem('wisdom'),
      animal_handling: localStorage.getItem('animal_handling'),
      insight: localStorage.getItem('insight'),
      medicine: localStorage.getItem('medicine'),
      perception: localStorage.getItem('perception'),
      other_pro_lang: localStorage.getItem('other_pro_lang'),
      survival: localStorage.getItem('survival'),
      charisma: localStorage.getItem('charisma'),
      deception: localStorage.getItem('deception'),
      intimidation: localStorage.getItem('intimidation'),
      performance: localStorage.getItem('performance'),
      persuasion: localStorage.getItem('persuasion'),
      armor_class: localStorage.getItem('armor_class'),
      initiative: localStorage.getItem('initiative'),
      speed: localStorage.getItem('speed'),
      HP: localStorage.getItem('HP'),
      temp_HP: localStorage.getItem('temp_HP'),
      hit_dice: localStorage.getItem('hit_dice'),
      death_save: localStorage.getItem('death_save'),
      successes: localStorage.getItem('successes'),
      failures: localStorage.getItem('failures'),
      att_spell_name: localStorage.getItem('att_spell_name'),
      att_spell_bonus: localStorage.getItem('att_spell_bonus'),
      att_spell_type: localStorage.getItem('att_spell_type'),
      CP: localStorage.getItem('CP'),
      SP: localStorage.getItem('SP'),
      EP: localStorage.getItem('EP'),
      GP: localStorage.getItem('GP'),
      PP: localStorage.getItem('PP'),
      equipments: localStorage.getItem('equipments'),
      traits: localStorage.getItem('traits'),
      ideals: localStorage.getItem('ideals'),
      bonds: localStorage.getItem('bonds'),
      flaws: localStorage.getItem('flaws')
    })
  }

  characterState.handleInputChange = event => {
    // if (event.target.name !== 'characterName') {
    setCharacterState({ ...characterState, [event.target.name]: event.target.value })
    localStorage.setItem(`${event.target.name}`, event.target.value)
    // } else {
    //   setCharacterState({ ...characterState, name: localStorage.getItem('characterName') })
    //   localStorage.setItem('characterName', event.target.value)
    // }
    console.log('hi')
    console.log(event.target.name)
    console.log(characterState.name)
    console.log(event)
  }

  characterState.handleCheckBoxInput = event => {
    setCharacterState({ ...characterState, [event.target.name]: event.target.checked })
    localStorage.setItem(`${event.target.name}`, event.target.checked)
    console.log('hi')
    console.log(event.target.checked)
  }

  characterState.handleMultipleCheckBoxInput = event => {
    if (event.target.checked) {
      localStorage.setItem(`${event.target.name}`, localStorage.getItem(`${event.target.name}`) + 1)
      setCharacterState({ ...characterState, [event.target.name]: localStorage.getItem(`${event.target.name}`) })
      localStorage.setItem(`${event.target.name}`, localStorage.getItem(`${event.target.name}`) + 1)
    } else {
      localStorage.setItem(`${event.target.name}`, localStorage.getItem(`${event.target.name}`) - 1)
      setCharacterState({ ...characterState, [event.target.name]: localStorage.getItem(`${event.target.name}`) })
      localStorage.setItem(`${event.target.name}`, localStorage.getItem(`${event.target.name}`))
    }
  }

  characterState.handleDicePage = event => {
    window.location.pathname = '../Dice/Dice.js'
  }
  characterState.handleNotePage = event => {
    window.location.pathname = '../Notes/Notes.js'
  }

  characterState.handleRemoveCharacter = event => {
    console.log(event.target.dataset)
    localStorage.setItem('name', '')
    localStorage.setItem('class', '')
    localStorage.setItem('background', '')
    localStorage.setItem('race', '')
    localStorage.setItem('faction', '')
    localStorage.setItem('alignment', '')
    localStorage.setItem('exp', '')
    localStorage.setItem('proficiency', '')
    localStorage.setItem('inspiration', '')
    localStorage.setItem('strength', '')
    localStorage.setItem('athletics', '')
    localStorage.setItem('dexterity', '')
    localStorage.setItem('acrobatics', '')
    localStorage.setItem('sleight_of_hand', '')
    localStorage.setItem('stealth', '')
    localStorage.setItem('constitution', '')
    localStorage.setItem('intelligent', '')
    localStorage.setItem('arcana', '')
    localStorage.setItem('history', '')
    localStorage.setItem('investigation', '')
    localStorage.setItem('nature', '')
    localStorage.setItem('religion', '')
    localStorage.setItem('wisdom', '')
    localStorage.setItem('animal_handling', '')
    localStorage.setItem('insight', '')
    localStorage.setItem('medicine', '')
    localStorage.setItem('perception', '')
    localStorage.setItem('other_pro_lang', '')
    localStorage.setItem('survival', '')
    localStorage.setItem('charisma', '')
    localStorage.setItem('deception', '')
    localStorage.setItem('intimidation', '')
    localStorage.setItem('performance', '')
    localStorage.setItem('persuasion', '')
    localStorage.setItem('armor_class', '')
    localStorage.setItem('initiative', '')
    localStorage.setItem('speed', '')
    localStorage.setItem('maxHP', '')
    localStorage.setItem('HP', '')
    localStorage.setItem('temp_HP', '')
    localStorage.setItem('hit_dice', '')
    localStorage.setItem('death_save', '')
    localStorage.setItem('successes', '')
    localStorage.setItem('failures', '')
    localStorage.setItem('att_spell_name', '')
    localStorage.setItem('att_spell_bonus', '')
    localStorage.setItem('att_spell_type', '')
    localStorage.setItem('CP', '')
    localStorage.setItem('SP', '')
    localStorage.setItem('EP', '')
    localStorage.setItem('GP', '')
    localStorage.setItem('PP', '')
    localStorage.setItem('equipments', '')
    localStorage.setItem('traits', '')
    localStorage.setItem('ideals', '')
    localStorage.setItem('bonds', '')
    localStorage.setItem('flaws', '')
    window.location.pathname = '../Character/Character.js'
  }

  characterState.handleRandomize = event => {
    const randClass = randClasses[Math.floor(Math.random() * randClasses.length)]
    const randRace = randRaces[Math.floor(Math.random() * randRaces.length)]
    const randBackground = randBackgrounds[Math.floor(Math.random() * randBackgrounds.length)]
    const randAlignment = randAlignments[Math.floor(Math.random() * randAlignments.length)]
    const randFaction = randFactions[Math.floor(Math.random() * randFactions.length)]

    localStorage.setItem('class', randClass)
    localStorage.setItem('race', randRace)
    localStorage.setItem('background', randBackground)
    localStorage.setItem('alignment', randAlignment)
    localStorage.setItem('faction', randFaction)

    setCharacterState({
      ...characterState,
      name: localStorage.getItem('name'),
      class: randClass,
      race: randRace,
      background: randBackground,
      alignment: randAlignment,
      faction: randFaction,
      exp: localStorage.getItem('exp'),
      proficiency: localStorage.getItem('proficiency'),
      inspiration: localStorage.getItem('inspiration'),
      strength: localStorage.getItem('strength'),
      athletics: localStorage.getItem('athletics'),
      dexterity: localStorage.getItem('dexterity'),
      acrobatics: localStorage.getItem('acrobatics'),
      sleight_of_hand: localStorage.getItem('sleight_of_hand'),
      stealth: localStorage.getItem('stealth'),
      constitution: localStorage.getItem('constitution'),
      intelligent: localStorage.getItem('intelligent'),
      arcana: localStorage.getItem('arcana'),
      history: localStorage.getItem('history'),
      investigation: localStorage.getItem('investigation'),
      nature: localStorage.getItem('nature'),
      religion: localStorage.getItem('religion'),
      wisdom: localStorage.getItem('wisdom'),
      animal_handling: localStorage.getItem('animal_handling'),
      insight: localStorage.getItem('insight'),
      medicine: localStorage.getItem('medicine'),
      perception: localStorage.getItem('perception'),
      other_pro_lang: localStorage.getItem('other_pro_lang'),
      survival: localStorage.getItem('survival'),
      charisma: localStorage.getItem('charisma'),
      deception: localStorage.getItem('deception'),
      intimidation: localStorage.getItem('intimidation'),
      performance: localStorage.getItem('performance'),
      persuasion: localStorage.getItem('persuasion'),
      armor_class: localStorage.getItem('armor_class'),
      initiative: localStorage.getItem('initiative'),
      speed: localStorage.getItem('speed'),
      HP: localStorage.getItem('HP'),
      temp_HP: localStorage.getItem('temp_HP'),
      hit_dice: localStorage.getItem('hit_dice'),
      death_save: localStorage.getItem('death_save'),
      successes: localStorage.getItem('successes'),
      failures: localStorage.getItem('failures'),
      att_spell_name: localStorage.getItem('att_spell_name'),
      att_spell_bonus: localStorage.getItem('att_spell_bonus'),
      att_spell_type: localStorage.getItem('att_spell_type'),
      CP: localStorage.getItem('CP'),
      SP: localStorage.getItem('SP'),
      EP: localStorage.getItem('EP'),
      GP: localStorage.getItem('GP'),
      PP: localStorage.getItem('PP'),
      equipments: localStorage.getItem('equipments'),
      traits: localStorage.getItem('traits'),
      ideals: localStorage.getItem('ideals'),
      bonds: localStorage.getItem('bonds'),
      flaws: localStorage.getItem('flaws')
    })

    console.log(characterState)
  }

  characterState.handleCreateCharacter = event => {
    event.preventDefault()
    setCharacterState({
      ...characterState,
      name: localStorage.getItem('name'),
      class: localStorage.getItem('class'),
      background: localStorage.getItem('background'),
      race: localStorage.getItem('race'),
      faction: localStorage.getItem('race'),
      alignment: localStorage.getItem('alignment'),
      exp: localStorage.getItem('exp'),
      proficiency: localStorage.getItem('profiency'),
      inspiration: localStorage.getItem('inspiration'),
      strength: localStorage.getItem('strength'),
      athletics: localStorage.getItem('athletics'),
      dexterity: localStorage.getItem('dexterity'),
      acrobatics: localStorage.getItem('acrobatics'),
      sleight_of_hand: localStorage.getItem('sleight_of_hand'),
      stealth: localStorage.getItem('stealth'),
      constitution: localStorage.getItem('constitution'),
      intelligent: localStorage.getItem('intelligent'),
      arcana: localStorage.getItem('arcana'),
      history: localStorage.getItem('history'),
      investigation: localStorage.getItem('investigation'),
      nature: localStorage.getItem('nature'),
      religion: localStorage.getItem('religion'),
      wisdom: localStorage.getItem('wisdom'),
      animal_handling: localStorage.getItem('animal_handling'),
      insight: localStorage.getItem('insight'),
      medicine: localStorage.getItem('medicine'),
      perception: localStorage.getItem('perception'),
      other_pro_lang: localStorage.getItem('other_pro_lang'),
      survival: localStorage.getItem('survival'),
      charisma: localStorage.getItem('charisma'),
      deception: localStorage.getItem('deception'),
      intimidation: localStorage.getItem('intimidation'),
      performance: localStorage.getItem('performance'),
      persuasion: localStorage.getItem('persuasion'),
      armor_class: localStorage.getItem('armor_class'),
      initiative: localStorage.getItem('initiative'),
      speed: localStorage.getItem('speed'),
      HP: localStorage.getItem('HP'),
      temp_HP: localStorage.getItem('temp_HP'),
      hit_dice: localStorage.getItem('hit_dice'),
      death_save: localStorage.getItem('death_save'),
      successes: localStorage.getItem('successes'),
      failures: localStorage.getItem('failures'),
      att_spell_name: localStorage.getItem('att_spell_name'),
      att_spell_bonus: localStorage.getItem('att_spell_bonus'),
      att_spell_type: localStorage.getItem('att_spell_type'),
      CP: localStorage.getItem('CP'),
      SP: localStorage.getItem('SP'),
      EP: localStorage.getItem('EP'),
      GP: localStorage.getItem('GP'),
      PP: localStorage.getItem('PP'),
      equipments: localStorage.getItem('equipments'),
      traits: localStorage.getItem('traits'),
      ideals: localStorage.getItem('ideals'),
      bonds: localStorage.getItem('bonds'),
      flaws: localStorage.getItem('flaws')
    })
    axios.post('/api/characters', {
      name: characterState.name,
      class: characterState.class,
      background: characterState.background,
      race: characterState.race,
      faction: characterState.faction,
      alignment: characterState.alignment,
      exp: characterState.exp,
      proficiency: characterState.proficiency,
      inspiration: characterState.inspiration,
      strength: characterState.strength,
      athletics: characterState.athletics,
      dexterity: characterState.dexterity,
      acrobatics: characterState.acrobatics,
      sleight_of_hand: characterState.sleight_of_hand,
      stealth: characterState.stealth,
      constitution: characterState.constitution,
      intelligent: characterState.intelligent,
      arcana: characterState.arcana,
      history: characterState.history,
      investigation: characterState.investigation,
      nature: characterState.nature,
      religion: characterState.religion,
      wisdom: characterState.wisdom,
      animal_handling: characterState.animal_handling,
      insight: characterState.insight,
      medicine: characterState.medicine,
      other_pro_lang: characterState.other_pro_lang,
      perception: characterState.perception,
      survival: characterState.survival,
      charisma: characterState.charisma,
      deception: characterState.deception,
      intimidation: characterState.intimidation,
      performance: characterState.performance,
      persuasion: characterState.persuasion,
      armor_class: characterState.armor_class,
      initiative: characterState.initiative,
      speed: characterState.speed,
      HP: characterState.HP,
      temp_HP: characterState.temp_HP,
      hit_dice: characterState.hit_dice,
      death_save: characterState.death_save,
      successes: characterState.successes,
      failures: characterState.failures,
      att_spell_name: characterState.att_spell_name,
      att_spell_bonus: characterState.att_spell_bonus,
      att_spell_type: characterState.att_spell_type,
      CP: characterState.CP,
      SP: characterState.SP,
      EP: characterState.EP,
      GP: characterState.GP,
      PP: characterState.PP,
      equipments: characterState.equipments,
      traits: characterState.traits,
      ideals: characterState.ideals,
      bonds: characterState.bonds,
      flaws: characterState.flaws
    }, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('user')}`
      }
    })
      .then(res => {
        // setCharacterState({
        //   ...characterState,
        //   name: ' ',
        //   class: ' ',
        //   background: ' ',
        //   race: ' ',
        //   faction: ' ',
        //   alignment: ' ',
        //   exp: ' ',
        //   proficiency: ' ',
        //   inspiration: ' ',
        //   strength: ' ',
        //   athletics: ' ',
        //   dexterity: ' ',
        //   acrobatics: ' ',
        //   sleight_of_hand: ' ',
        //   stealth: ' ',
        //   constitution: ' ',
        //   intelligent: ' ',
        //   arcana: ' ',
        //   history: ' ',
        //   investigation: ' ',
        //   nature: ' ',
        //   religion: ' ',
        //   wisdom: ' ',
        //   animal_handling: ' ',
        //   insight: ' ',
        //   medicine: ' ',
        //   perception: ' ',
        //   other_pro_lang: ' ',
        //   survival: ' ',
        //   charisma: ' ',
        //   deception: ' ',
        //   intimidation: ' ',
        //   performance: ' ',
        //   persuasion: ' ',
        //   armor_class: ' ',
        //   initiative: ' ',
        //   speed: ' ',
        //   HP: ' ',
        //   temp_HP: ' ',
        //   hit_dice: ' ',
        //   death_save: ' ',
        //   successes: ' ',
        //   failures: ' ',
        //   att_spell_name: ' ',
        //   att_spell_bonus: ' ',
        //   att_spell_type: ' ',
        //   CP: ' ',
        //   SP: ' ',
        //   EP: ' ',
        //   GP: ' ',
        //   PP: ' ',
        //   equipments: ' ',
        //   traits: ' ',
        //   ideals: ' ',
        //   bonds: ' ',
        //   flaws: ' '
        // })
        // localStorage.setItem('characterName', characterState.name)
        // localStorage.setItem('class', characterState.class)
        // localStorage.setItem('background', characterState.background)
        // localStorage.setItem('race', characterState.race)
        // localStorage.setItem('faction', characterState.faction)
        // localStorage.setItem('alignment', characterState.alignment)
        // localStorage.setItem('exp', characterState.exp)
        // localStorage.setItem('proficiency', characterState.proficiency)
        // localStorage.setItem('inspiration', characterState.inspiration)
        // localStorage.setItem('strength', characterState.strength)
        // localStorage.setItem('athletics', characterState.athletics)
        // localStorage.setItem('dexterity', characterState.dexterity)
        // localStorage.setItem('acrobatics', characterState.acrobatics)
        // localStorage.setItem('sleight_of_hand', characterState.sleight_of_hand)
        // localStorage.setItem('stealth', characterState.stealth)
        // localStorage.setItem('constitution', characterState.constitution)
        // localStorage.setItem('intelligent', characterState.intelligent)
        // localStorage.setItem('arcana', characterState.arcana)
        // localStorage.setItem('history', characterState.history)
        // localStorage.setItem('investigation', characterState.investigation)
        // localStorage.setItem('nature', characterState.nature)
        // localStorage.setItem('religion', characterState.religion)
        // localStorage.setItem('wisdom', characterState.wisdom)
        // localStorage.setItem('animal_handling', characterState.animal_handling)
        // localStorage.setItem('insight', characterState.insight)
        // localStorage.setItem('medicine', characterState.medicine)
        // localStorage.setItem('perception', characterState.perception)
        // localStorage.setItem('other_pro_lang', characterState.other_pro_lang)
        // localStorage.setItem('survival', characterState.survival)
        // localStorage.setItem('charisma', characterState.charisma)
        // localStorage.setItem('deception', characterState.deception)
        // localStorage.setItem('intimidation', characterState.intimidation)
        // localStorage.setItem('performance', characterState.performance)
        // localStorage.setItem('persuasion', characterState.persuasion)
        // localStorage.setItem('armor_class', characterState.armor_class)
        // localStorage.setItem('initiative', characterState.initiative)
        // localStorage.setItem('speed', characterState.speed)
        // localStorage.setItem('HP', characterState.HP)
        // localStorage.setItem('temp_HP', characterState.temp_HP)
        // localStorage.setItem('hit_dice', characterState.hit_dice)
        // localStorage.setItem('death_save', characterState.death_save)
        // localStorage.setItem('successes', characterState.successes)
        // localStorage.setItem('failures', characterState.failures)
        // localStorage.setItem('att_spell_name', characterState.att_spell_name)
        // localStorage.setItem('att_spell_bonus', characterState.att_spell_bonus)
        // localStorage.setItem('att_spell_type', characterState.att_spell_type)
        // localStorage.setItem('CP', characterState.CP)
        // localStorage.setItem('SP', characterState.SP)
        // localStorage.setItem('EP', characterState.EP)
        // localStorage.setItem('GP', characterState.GP)
        // localStorage.setItem('PP', characterState.PP)
        // localStorage.setItem('equipments', characterState.equipments)
        // localStorage.setItem('traits', characterState.traits)
        // localStorage.setItem('ideals', characterState.ideals)
        // localStorage.setItem('bonds', characterState.bonds)
        // localStorage.setItem('flaws', characterState.flaws)
      })
      .catch(err => {
        console.error(err)
      })
  }
  // characterState.handleCreateCharacter = event => {
  //   event.preventDefault()
  //   axios.post('/api/characters', {
  //     name: characterState.name,
  //     class: characterState.class,
  //     background: characterState.background,
  //     race: characterState.race,
  //     faction: characterState.faction,
  //     alignment: characterState.alignment,
  //     exp: characterState.exp,
  //     proficiency: characterState.proficiency,
  //     inspiration: characterState.inspiration,
  //     strength: characterState.strength,
  //     athletics: characterState.athletics,
  //     dexterity: characterState.dexterity,
  //     constitution: characterState.constitution,
  //     intelligent: characterState.intelligent,
  //     acrobatics: characterState.acrobatics,
  //     arcana: characterState.arcana,
  //     animal_handling: characterState.animal_handling,
  //     history: characterState.history,
  //     wisdom: characterState.wisdom,
  //     intimidation: characterState.intimidation,
  //     insight: characterState.insight,
  //     investigation: characterState.investigation,
  //     medicine: characterState.medicine,
  //     nature: characterState.nature,
  //     perception: characterState.perception,
  //     performance: characterState.performance,
  //     persuasion: characterState.persuasion,
  //     religion: characterState.religion,
  //     sleight_of_hand: characterState.sleight_of_hand,
  //     stealth: characterState.stealth,
  //     survival: characterState.survival,
  //     charisma: characterState.charisma,
  //     deception: characterState.deception,
  //     armor_class: characterState.armor_class,
  //     initiative: characterState.initiative,
  //     speed: characterState.speed,
  //     HP: characterState.HP,
  //     temp_HP: characterState.temp_HP,
  //     hit_dice: characterState.hit_dice,
  //     death_save: characterState.death_save,
  //     successes: characterState.successes,
  //     failures: characterState.failures
  //   }, {
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem('user')}`
  //     }
  //   })
  //     .then(res => {
  //       setCharacterState({
  //         ...characterState,
  //         name: ' ',
  //         class: ' ',
  //         background: ' ',
  //         race: ' ',
  //         faction: ' ',
  //         alignment: ' ',
  //         exp: ' ',
  //         proficiency: ' ',
  //         inspiration: ' ',
  //         strength: ' ',
  //         athletics: ' ',
  //         dexterity: ' ',
  //         acrobatics: ' ',
  //         sleight_of_hand: ' ',
  //         stealth: ' ',
  //         constitution: ' ',
  //         intelligent: ' ',
  //         arcana: ' ',
  //         history: ' ',
  //         investigation: ' ',
  //         nature: ' ',
  //         religion: ' ',
  //         wisdom: ' ',
  //         animal_handling: ' ',
  //         insight: ' ',
  //         medicine: ' ',
  //         perception: ' ',
  //         survival: ' ',
  //         charisma: ' ',
  //         deception: ' ',
  //         intimidation: ' ',
  //         performance: ' ',
  //         persuasion: ' ',
  //         armor_class: ' ',
  //         initiative: ' ',
  //         speed: ' ',
  //         HP: ' ',
  //         temp_HP: ' ',
  //         hit_dice: ' ',
  //         death_save: ' ',
  //         successes: ' ',
  //         failures: ' '
  //       })
  //       localStorage.setItem('name', characterState.name)
  //       localStorage.setItem('class', characterState.class)
  //       localStorage.setItem('background', characterState.background)
  //       localStorage.setItem('race', characterState.race)
  //       localStorage.setItem('faction', characterState.faction)
  //       localStorage.setItem('alignment', characterState.alignment)
  //       localStorage.setItem('exp', characterState.exp)
  //       localStorage.setItem('proficiency', characterState.proficiency)
  //       localStorage.setItem('inspiration', characterState.inspiration)
  //       localStorage.setItem('strength', characterState.strength)
  //       localStorage.setItem('athletics', characterState.athletics)
  //       localStorage.setItem('dexterity', characterState.dexterity)
  //       localStorage.setItem('acrobatics', characterState.acrobatics)
  //       localStorage.setItem('sleight_of_hand', characterState.sleight_of_hand)
  //       localStorage.setItem('stealth', characterState.stealth)
  //       localStorage.setItem('constitution', characterState.constitution)
  //       localStorage.setItem('intelligent', characterState.intelligent)
  //       localStorage.setItem('arcana', characterState.arcana)
  //       localStorage.setItem('history', characterState.history)
  //       localStorage.setItem('investigation', characterState.investigation)
  //       localStorage.setItem('nature', characterState.nature)
  //       localStorage.setItem('religion', characterState.religion)
  //       localStorage.setItem('wisdom', characterState.wisdom)
  //       localStorage.setItem('animal_handling', characterState.animal_handling)
  //       localStorage.setItem('insight', characterState.insight)
  //       localStorage.setItem('medicine', characterState.medicine)
  //       localStorage.setItem('perception', characterState.perception)
  //       localStorage.setItem('survival', characterState.survival)
  //       localStorage.setItem('charisma', characterState.charisma)
  //       localStorage.setItem('deception', characterState.deception)
  //       localStorage.setItem('intimidation', characterState.intimidation)
  //       localStorage.setItem('performance', characterState.performance)
  //       localStorage.setItem('persuasion', characterState.persuasion)
  //       localStorage.setItem('armor_class', characterState.armor_class)
  //       localStorage.setItem('initiative', characterState.initiative)
  //       localStorage.setItem('speed', characterState.speed)
  //       localStorage.setItem('HP', characterState.HP)
  //       localStorage.setItem('temp_HP', characterState.temp_HP)
  //       localStorage.setItem('hit_dice', characterState.hit_dice)
  //       localStorage.setItem('death_save', characterState.death_save)
  //       localStorage.setItem('successes', characterState.successes)
  //       localStorage.setItem('failures', characterState.failures)
  //       window.location.pathname = '../Character/Character.js'
  //     })
  //     .catch(err => {
  //       console.error(err)
  //     })
  // }

  return (
    <div className='d-and-d-character-sheet container-xl mt-5 mb-5'>
      <h3>Character Sheet</h3>
      <div>
        <div className='row mb-4'>
          <div className='col-md-3 pr-2 pl-2'>
            <div className='d-and-d-page-title' />
            <div className='d-and-d-attribute-collection char-name pr-3 pl-3'>
              {/* <Input type="name" name="name" id="CharacterName"
              defaultValue={localStorage.getItem('name')}
              onChange={characterState.handleInputChange}
              /> */}
              <Input
                type='name' name='name' id='name'
                value={localStorage.getItem('name')}
                onChange={characterState.handleInputChange}
              />
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
                  {/* <Input type="class" name="class" id="Class" value={localStorage.getItem('class')} /> */}
                  {/* <input
                    type='class'
                    name='class'
                    defaultValue={localStorage.getItem('class')}
                    onChange={characterState.handleRandomize}
                  /> */}
                  <Input type='class' name='class' id='Class' value={localStorage.getItem('class')} onChange={characterState.handleInputChange} />
                  <label
                    style={{
                      width: '100%',
                      textAlign: 'right',
                      textTransform: 'uppercase',
                      fontSize: '11px'
                    }}
                  >Class & Level
                  </label>
                </div>
                <div className='col-md-3 col-6 pl-0 pr-0'>
                  <Input type='background' name='background' id='background' value={localStorage.getItem('background')} onChange={characterState.handleInputChange} />
                  {/* <Input type="background" name="background" id="background" defaultValue={localStorage.getItem('background')} /> */}
                  <label
                    style={{
                      width: '100%',
                      textAlign: 'right',
                      textTransform: 'uppercase',
                      fontSize: '11px'
                    }}
                  >Background
                  </label>
                </div>
                <div className='col-md-3 col-6 pl-0 pr-0'>
                  {/* <Input type="faction" name="faction" id="faction" defaultValue={localStorage.getItem('faction')} /> */}
                  <Input type='faction' name='faction' id='faction' value={localStorage.getItem('faction')} onChange={characterState.handleInputChange} />
                  <label
                    style={{
                      width: '100%',
                      textAlign: 'right',
                      textTransform: 'uppercase',
                      fontSize: '11px'
                    }}
                  >Faction
                  </label>
                </div>
              </div>
              <div className='row pl-3 pr-3'>
                <div className='col-md-3 col-6 pl-0 pr-0'>
                  {/* <Input type="race" name="race" id="Race" defaultValue={localStorage.getItem('race')} /> */}
                  <Input type='race' name='race' id='Race' value={localStorage.getItem('race')} onChange={characterState.handleInputChange} />
                  <label
                    style={{
                      width: '100%',
                      textAlign: 'right',
                      textTransform: 'uppercase',
                      fontSize: '11px'
                    }}
                  >Race
                  </label>
                </div>
                <div className='col-md-3 col-6 pl-0 pr-0'>
                  {/* <Input type="alignment" name="alignment" id="Alignment" defaultValue={localStorage.getItem('alignment')} /> */}
                  <Input type='alignment' name='alignment' id='Alignment' value={localStorage.getItem('alignment')} onChange={characterState.handleInputChange} />
                  <label
                    style={{
                      width: '100%',
                      textAlign: 'right',
                      textTransform: 'uppercase',
                      fontSize: '11px'
                    }}
                  >Alignment
                  </label>
                </div>
                <div className='col-md-3 col-6 pl-0 pr-0'>
                  {/* <Input type="exp" name="exp" id="Exp" defaultValue={localStorage.getItem('exp')} /> */}
                  <Input type='exp' name='exp' id='Exp' value={localStorage.getItem('exp')} onChange={characterState.handleInputChange} />
                  <label
                    style={{
                      width: '100%',
                      textAlign: 'right',
                      textTransform: 'uppercase',
                      fontSize: '11px'
                    }}
                  >Experience Points
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button
          color='danger' onClick={characterState.handleCreateCharacter}
          style={{
            margin: '5px',
            marginBottom: '20px'
          }}
        >Create Character
        </Button>
        <Button
          color='danger' onClick={characterState.handleRandomize}
          style={{
            margin: '5px',
            marginBottom: '20px'
          }}
        >Random Character
        </Button>
        <div className='row'>
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-4 pr-1'>
                <div className='d-and-d-box gray'>
                  <div>
                    <div className='d-and-d-statbox'>
                      <label>Strength</label>
                      <div className='d-and-d-statbox-modifier'>
                        <input type='text' />
                      </div>
                    </div>
                    <div className='d-and-d-statbox-value'>
                      {/* <input type='text'/> */}
                      <Input type='text' name='strength' id='strength' value={localStorage.getItem('strength')} onChange={characterState.handleInputChange} />
                    </div>
                  </div>
                  <div>
                    <div className='d-and-d-statbox'>
                      <label>Dexterity</label>
                      <div className='d-and-d-statbox-modifier'>
                        <input type='text' />
                      </div>
                    </div>
                    <div className='d-and-d-statbox-value'>
                      {/* <input type='text'/> */}
                      <Input type='text' name='dexterity' id='dexterity' value={localStorage.getItem('dexterity')} onChange={characterState.handleInputChange} />
                    </div>
                  </div>
                  <div>
                    <div className='d-and-d-statbox'>
                      <label>Constitution</label>
                      <div className='d-and-d-statbox-modifier'><input type='text' /></div>
                    </div>
                    <div className='d-and-d-statbox-value'>
                      {/* <input type='text'/> */}
                      <Input type='text' name='constitution' id='constitution' value={localStorage.getItem('constitution')} onChange={characterState.handleInputChange} />
                    </div>
                  </div>
                  <div>
                    <div className='d-and-d-statbox'>
                      <label>Intelligence</label>
                      <div className='d-and-d-statbox-modifier'><input type='text' /></div>
                    </div>
                    <div className='d-and-d-statbox-value'>
                      {/* <input type='text'/> */}
                      <Input type='text' name='intelligence' id='intelligence' value={localStorage.getItem('intelligence')} onChange={characterState.handleInputChange} />
                    </div>
                  </div>
                  <div>
                    <div className='d-and-d-statbox'>
                      <label>Wisdom</label>
                      <div className='d-and-d-statbox-modifier'><input type='text' /></div>
                    </div>
                    <div className='d-and-d-statbox-value'>
                      {/* <input type='text'/> */}
                      <Input type='text' name='wisdom' />
                    </div>
                  </div>
                  <div>
                    <div className='d-and-d-statbox'>
                      <label>Charisma</label>
                      <div className='d-and-d-statbox-modifier'><input type='text' /></div>
                    </div>
                    <div className='d-and-d-statbox-value'>
                      {/* <input type='text'/> */}
                      <Input type='text' name='charisma' id='charisma' value={localStorage.getItem('charisma')} onChange={characterState.handleInputChange} />
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-8'>
                <div className='d-and-d-statrow'>
                  <div className='d-and-d-statrow-value'>
                    {/* <input type='text'/> */}
                    <Input type='text' name='inspiration' id='inspiration' value={localStorage.getItem('inspiration')} onChange={characterState.handleInputChange} />
                  </div>
                  <div className='d-and-d-statrow-label'>
                    <label>Inspiration</label>
                  </div>
                </div>
                <div className='d-and-d-statrow'>
                  <div className='d-and-d-statrow-value'>
                    {/* <input type='text' /> */}
                    <Input type='text' name='proficiency' id='proficiency' value={localStorage.getItem('proficiency')} onChange={characterState.handleInputChange} />
                  </div>
                  <div className='d-and-d-statrow-label'>
                    <label>Proficiency Bonus</label>
                  </div>
                </div>
                <div className='d-and-d-box'>
                  <div className='d-and-d-skill'>
                    <input type='checkbox' />
                    <input type='text' onChange={characterState.handleCheckBoxInput} />
                    <label>Strength</label>
                  </div>
                  <div className='d-and-d-skill'>
                    <input type='checkbox' />
                    <input type='text' onChange={characterState.handleCheckBoxInput} />
                    <label>Dexterity</label>
                  </div>
                  <div className='d-and-d-skill'>
                    <input type='checkbox' />
                    <input type='text' onChange={characterState.handleCheckBoxInput} />
                    <label>Constitution</label>
                  </div>
                  <div className='d-and-d-skill'>
                    <input type='checkbox' />
                    <input type='text' onChange={characterState.handleCheckBoxInput} />
                    <label>Intelligence</label>
                  </div>
                  <div className='d-and-d-skill'>
                    <input type='checkbox' name='wisdom' onChange={characterState.handleCheckBoxInput} />
                    <input type='text' />
                    <label>Widsom</label>
                  </div>
                  <div className='d-and-d-skill'>
                    <input type='checkbox' onChange={characterState.handleCheckBoxInput} />
                    <input type='text' />
                    <label>Charisma</label>
                  </div>
                  <label
                    className='d-and-d-title'
                    style={{ marginTop: '10px' }}
                  >
                    Saving Throws
                  </label>
                </div>
                <div className='d-and-d-box'>
                  <div style={{ textAlign: 'left' }}>
                    <div className='d-and-d-skill'>
                      <input type='checkbox' />
                      <input type='text' />
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
                      <label>Insight</label>
                      <span className='d-and-d-skill-hint'>Wis</span>
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
                    className='d-and-d-title'
                    style={{ marginTop: '10px' }}
                  >
                    Skills
                  </Label>
                </div>
              </div>
            </div>
            <div className='mt-2'>
              <div className='d-and-d-statrow'>
                <div className='d-and-d-statrow-value'>
                  {/* <input type='text' /> */}
                  <Input type='text' name='perception' id='perception' value={localStorage.getItem('perception')} onChange={characterState.handleInputChange} />
                </div>
                <div className='d-and-d-statrow-label'>
                  <label>Passive Wisdom (Perception)</label>
                </div>
              </div>
            </div>
            <div className='d-and-d-box mt-4'>
              {/* <textarea rows={12} /> */}
              <textarea
                rows={12}
                type='text' name='other_pro_lang' id='other_pro_lang' value={localStorage.getItem('other_pro_lang')} onChange={characterState.handleInputChange}
              />
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
                    <div className='d-and-d-statbox type2'>
                      <div className='d-and-d-statbox-modifier'>
                        {/* <input type='text' /> */}
                        <Input type='armor-class' name='armor-class' id='armor-class' value={localStorage.getItem('armor-class')} onChange={characterState.handleInputChange} />
                      </div>
                      <div>
                        <label className='label-top'>Armour Class</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-4 pr-2'>
                  <div>
                    <div className='d-and-d-statbox type2'>
                      <div className='d-and-d-statbox-modifier'>
                        {/* <input type='text' /> */}
                        <Input type='initiative' name='initiative' id='initiative' value={localStorage.getItem('initiative')} onChange={characterState.handleInputChange} />
                      </div>
                      <div>
                        <label className='label-top'>Initiative</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-4 pr-2'>
                  <div>
                    <div className='d-and-d-statbox type2'>
                      <div className='d-and-d-statbox-modifier'>
                        {/* <input type='text' /> */}
                        <Input type='speed' name='speed' id='speed' value={localStorage.getItem('speed')} onChange={characterState.handleInputChange} />
                      </div>
                      <div>
                        <label className='label-top'>Speed</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className='d-and-d-box white'
                style={{
                  borderRadius: '8px 8px 0 0',
                  marginBottom: '5px',
                  paddingBottom: '5px'
                }}
              >
                <div className='d-and-d-gray-text'>
                  <label style={{ width: '95px' }}>Hit Point Maximum</label>
                  {/* <Input type='text'
                  style={{ width: 'calc(100% = 95px)' }}
                  className='d-and-d-linput' /> */}
                  <Input
                    type='text'
                    style={{ width: 'calc(100% = 95px)' }}
                    className='d-and-d-linput'
                    name='maxHP' id='maxHP' value={localStorage.getItem('maxHP')} onChange={characterState.handleInputChange}
                  />
                </div>
                {/* <Input type='text' className='d-and-d-cinput' /> */}
                <Input
                  type='text'
                  style={{ width: 'calc(100% = 95px)' }}
                  className='d-and-d-linput'
                  name='HP' id='HP' value={localStorage.getItem('HP')} onChange={characterState.handleInputChange}
                />
                <label className='d-and-d-title' style={{ marginTop: '5px' }}>Current Hit Points</label>
              </div>
              <div
                className='d-and-d-box white mb-2'
                style={{ borderRadius: '0 0 8px 8px', paddingBottom: '5px' }}
              >
                {/* <input type='text'></input> */}
                <Input
                  type='text'
                  className='d-and-d-cinput'
                  name='temp_HP' id='temp_HP' value={localStorage.getItem('temp_HP')} onChange={characterState.handleInputChange}
                />
                <label className='d-and-d-title' style={{ marginTop: '5px' }}>Temporary Hit Points</label>
              </div>
              <div className='row mt-1'>
                <div className='col-6 pr-1'>
                  <div
                    className='d-and-d-box white mb-0'
                    style={{ paddingBottom: '5px' }}
                  >
                    <div className='d-and-d-gray-text'>
                      <label style={{ width: '25px' }}>Total</label>
                      <input
                        type='text'
                        style={{ width: 'calc(100% - 25px' }}
                        value={localStorage.getItem('total')}
                        onChange={characterState.handleInputChange}
                        className='d-and-d-linput'
                      />
                    </div>
                    <input
                      type='text'
                      value={localStorage.getItem('hit_dice')}
                      onChange={characterState.handleInputChange}
                      className='d-and-d-cinput'
                    />
                    <label
                      className='d-and-d-title'
                      style={{ marginTop: '5px' }}
                    >Hit Dice
                    </label>
                  </div>
                </div>
                <div className='col-6 pl-1'>
                  <div className='d-and-d-box white mb-0'>
                    <div className='d-and-d-deathsave'>
                      <FormGroup check inline>
                        <Label
                          style={{
                            marginBottom: '5px'
                          }} check
                        >
                          Sucesses
                          <Input type='checkbox' />
                        </Label>
                        <Label check>
                          <Input type='checkbox' />
                        </Label>
                        <Label check>
                          <Input type='checkbox' />
                        </Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Label check>
                          Failures
                          <Input type='checkbox' name='failures' onChange={characterState.handleMultipleCheckBoxInput} />
                        </Label>
                        <Label check>
                          <Input type='checkbox' name='failures' onChange={characterState.handleMultipleCheckBoxInput} />
                        </Label>
                        <Label check>
                          <Input type='checkbox' name='failures' onChange={characterState.handleMultipleCheckBoxInput} />
                        </Label>
                      </FormGroup>
                    </div>
                    <label
                      className='d-and-d-title'
                      style={{ marginTop: '6px' }}
                    >
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
                  {/* <input type='text' /> */}
                  <Input type='att_spell_name' name='att_spell_name' id='att_spell_name' value={localStorage.getItem('att_spell_name')} onChange={characterState.handleInputChange} />
                </td>
                <td>
                  {/* <input type='text'/> */}
                  <Input
                    type='att_spell_bonus' name='att_spell_bonus' id='att_spell_bonus'
                    value={localStorage.getItem('att_spell_bonus')} onChange={characterState.handleInputChange}
                  />
                </td>
                <td>
                  {/* <input type='text'/> */}
                  <Input type='att_spell_type' name='att_spell_type' id='att_spell_type' value={localStorage.getItem('att_spell_type')} onChange={characterState.handleInputChange} />
                </td>
              </tr>
              <textarea
                rows={6}
              />
              <label className='d-and-d-title' style={{ marginTop: '10px' }}>
                Attacks & Spellcasting
              </label>
            </div>
            <div className='d-and-d-box mt-4'>
              <div className='row'>
                <div style={{ width: '100px' }}>
                  <div className='d-and-d-currency'>
                    <div className='d-and-d-currency-label'>
                      <label>CP</label>
                    </div>
                    <div className='d-and-d-currency-value'>
                      {/* <input type='text'/> */}
                      <Input type='text' name='CP' id='CP' value={localStorage.getItem('CP')} onChange={characterState.handleInputChange} />
                    </div>
                  </div>
                  <div className='d-and-d-currency'>
                    <div className='d-and-d-currency-label'>
                      <label>SP</label>
                    </div>
                    <div className='d-and-d-currency-value'>
                      {/* <input type='text'/> */}
                      <Input type='text' name='SP' id='SP' value={localStorage.getItem('SP')} onChange={characterState.handleInputChange} />
                    </div>
                  </div>
                  <div className='d-and-d-currency'>
                    <div className='d-and-d-currency-label'>
                      <label>EP</label>
                    </div>
                    <div className='d-and-d-currency-value'>
                      {/* <input type='text'/> */}
                      <Input type='text' name='EP' id='EP' value={localStorage.getItem('EP')} onChange={characterState.handleInputChange} />
                    </div>
                  </div>
                  <div className='d-and-d-currency'>
                    <div className='d-and-d-currency-label'>
                      <label>GP</label>
                    </div>
                    <div className='d-and-d-currency-value'>
                      {/* <input type='text'/> */}
                      <Input type='text' name='GP' id='GP' value={localStorage.getItem('GP')} onChange={characterState.handleInputChange} />
                    </div>
                  </div>
                  <div className='d-and-d-currency'>
                    <div className='d-and-d-currency-label'>
                      <label>PP</label>
                    </div>
                    <div className='d-and-d-currency-value'>
                      {/* <input type='text'/> */}
                      <Input type='text' name='PP' id='PP' value={localStorage.getItem('PP')} onChange={characterState.handleInputChange} />
                    </div>
                  </div>
                </div>
                <div className='col'>
                  {/* <textarea
                className='d-and-d-equipment-indent'
                rows={14}></textarea> */}
                  <textarea
                    className='d-and-d-equipment-indent'
                    rows={14}
                    type='equipments' name='equipments' id='equipments'
                    value={localStorage.getItem('equipments')}
                    onChange={characterState.handleInputChange}
                  />
                </div>
                {/* <div className='col-md-12'>
                <textarea
                  rows={4}></textarea>
              </div> */}
                <label className='d-and-d-title' style={{ marginTop: '10px' }}>
                  Equipment
                </label>
              </div>
            </div>
          </div>

          <div className='col-md-4'>
            <div
              className='d-and-d-box gray'
              style={{ marginBottom: '17px' }}
            >
              <div
                className='d-and-d-box white'
                style={{
                  borderRadius: '8px 8px 0 0',
                  marginBottom: '5px',
                  paddingTop: '1px',
                  paddingBottom: '5px'
                }}
              >
                {/* <textarea rows={3}/> */}
                <textarea
                  rows={3}
                  type='traits' name='traits' id='traits'
                  value={localStorage.getItem('traits')} onChange={characterState.handleInputChange}
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
                }}
              >
                {/* <textarea rows={3}/>
               */}
                <textarea
                  rows={3}
                  type='ideals' name='ideals' id='ideals'
                  value={localStorage.getItem('ideals')} onChange={characterState.handleInputChange}
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
                }}
              >
                {/* <textarea rows={2}/> */}
                <textarea
                  rows={2}
                  type='bonds' name='bonds' id='bonds'
                  value={localStorage.getItem('bonds')}
                  onChange={characterState.handleInputChange}
                />
                <label className='d-and-d-title'>Bonds</label>
              </div>
              <div
                className='d-and-d-box white'
                style={{
                  borderRadius: '0 0 8px 8px',
                  marginBottom: '0px',
                  paddingTop: '1px',
                  paddingBottom: '4px'
                }}
              >
                {/* <textarea rows={2}/> */}
                <textarea
                  rows={2}
                  type='flaws' name='flaws' id='flaws'
                  value={localStorage.getItem('flaws')}
                  onChange={characterState.handleInputChange}
                />
                <label className='d-and-d-title'>Flaws</label>
              </div>
            </div>
            <div className='d-and-d-box mt-3'>
              {/* <textarea
              style={{ paddingBottom: '5px' }}
              rows={27}/> */}
              <textarea
                rows={27}
                type='traits' name='feat_traits' id='feat_traits'
                value={localStorage.getItem('feat_traits')}
                onChange={characterState.handleInputChange}
              />
              <label className='d-and-d-title' style={{ marginTop: '10px' }}>
                Features & Traits
              </label>
            </div>
          </div>
        </div>
      </div>
      <Button
        color='danger'
        style={{
          margin: '5px',
          marginBottom: '20px'
        }} onClick={characterState.handleCreateCharacter}
      >Create Character
      </Button>
      <Button
        color='danger'
        style={{
          margin: '5px',
          marginBottom: '20px'
        }} onClick={characterState.handleDicePage}
      >Dice Roller
      </Button>
      <Button
        color='danger'
        style={{
          margin: '5px',
          marginBottom: '20px'
        }} onClick={characterState.handleNotePage}
      >Notepad
      </Button>
      <Button
        color='danger'
        style={{
          margin: '5px',
          marginBottom: '20px'
        }} onClick={characterState.handleRemoveCharacter}
      >Remove Character
      </Button>

    </div>
  )
}
export default Character
