import React from 'react'
import {Meta} from '@storybook/react'
import {SmileyIcon, KebabHorizontalIcon, TriangleDownIcon} from '@primer/octicons-react'
import {BaseStyles, Box, ThemeProvider, Text, IconButton, PageLayout, Heading, ActionMenu, ActionList} from '..'
import {useAnchoredPosition} from '../hooks'

export default {
  title: 'Behaviors/anchoredPosition',
  decorators: [
    // Note: For some reason, if you use <BaseStyles><Story /></BaseStyles>,
    // the component gets unmounted from the root every time a control changes!
    Story => {
      return (
        <ThemeProvider>
          <BaseStyles>{Story()}</BaseStyles>
        </ThemeProvider>
      )
    }
  ]
} as Meta

type TooltipProps = {
  children: string
  position?: {left: number; top: number}
  defaultVisible?: boolean
}
const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(({defaultVisible, position, children}, ref) => {
  return (
    <Box
      data-component="tooltip"
      ref={ref}
      sx={{
        visibility: defaultVisible ? 'visible' : 'hidden',
        backgroundColor: 'neutral.emphasisPlus',
        color: 'fg.onEmphasis',
        borderRadius: 1,
        fontSize: 0,
        paddingY: 1,
        paddingX: 2,
        width: 'fit-content',
        position: 'absolute',
        zIndex: 2,
        top: position?.top,
        left: position?.left
      }}
    >
      {children}
    </Box>
  )
})

export const Tooltips = () => {
  const [optionsOpen, setOptionsOpen] = React.useState(false)
  const optionsButtonRef = React.useRef<HTMLButtonElement>(null)
  const optionsTooltipRef = React.useRef<HTMLDivElement>(null)
  const {position: optionsTooltipPosition} = useAnchoredPosition({
    side: 'outside-bottom',
    align: 'start',
    anchorElementRef: optionsButtonRef,
    floatingElementRef: optionsTooltipRef
  })

  const [reactionsOpen, setReactionsOpen] = React.useState(false)
  const reactionButtonRef = React.useRef<HTMLButtonElement>(null)
  const reactionTooltipRef = React.useRef<HTMLDivElement>(null)
  const {position: reactionTooltipPosition} = useAnchoredPosition({
    side: 'outside-bottom',
    align: 'start',
    anchorElementRef: reactionButtonRef,
    floatingElementRef: reactionTooltipRef
  })

  return (
    <>
      <PageLayout padding="none">
        <PageLayout.Header>
          <Box>
            <Heading as="h1" sx={{fontWeight: 'normal'}}>
              Input validation styles <Text sx={{color: 'fg.muted', fontWeight: 'light'}}>#1831</Text>
            </Heading>
            <Box sx={{display: 'flex', gap: 2, alignItems: 'center'}}></Box>
          </Box>
        </PageLayout.Header>
        <PageLayout.Content>
          <Box
            sx={{border: '1px solid', borderRadius: 2, borderColor: 'border.default', height: 200, overflow: 'hidden'}}
          >
            <Box
              sx={{
                backgroundColor: 'canvas.inset',
                padding: 1,
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center'
              }}
            >
              <Box
                as="span"
                sx={{
                  mr: 2,
                  ':hover': {
                    '[data-component=tooltip]': {visibility: 'visible'}
                  }
                }}
              >
                <IconButton
                  ref={reactionButtonRef}
                  icon={SmileyIcon}
                  variant="invisible"
                  aria-label="Add your reaction"
                  onClick={() => setReactionsOpen(!reactionsOpen)}
                />
                <Tooltip ref={reactionTooltipRef} position={reactionTooltipPosition}>
                  Add reaction
                </Tooltip>
              </Box>
              <ActionMenu anchorRef={reactionButtonRef} open={reactionsOpen} onOpenChange={setReactionsOpen}>
                <ActionMenu.Overlay>
                  <ActionList sx={{display: 'flex', flexWrap: 'wrap'}}>
                    {['👍', '👎', '😄', '🎉', '😕', '❤️', '🚀', '👀'].map(emoji => (
                      <ActionList.Item key={emoji}>{emoji}</ActionList.Item>
                    ))}
                  </ActionList>
                </ActionMenu.Overlay>
              </ActionMenu>

              <Box
                as="span"
                sx={{
                  mr: 2,
                  ':hover': {
                    '[data-component=tooltip]': {visibility: optionsOpen ? 'hidden' : 'visible'}
                  }
                }}
              >
                <IconButton
                  ref={optionsButtonRef}
                  icon={KebabHorizontalIcon}
                  variant="invisible"
                  aria-label="Show options"
                  onClick={() => setOptionsOpen(!optionsOpen)}
                />
                <Tooltip ref={optionsTooltipRef} position={optionsTooltipPosition}>
                  Show options
                </Tooltip>
              </Box>
              <ActionMenu anchorRef={optionsButtonRef} open={optionsOpen} onOpenChange={setOptionsOpen}>
                <ActionMenu.Overlay>
                  <ActionList>
                    <ActionList.Item>Copy link</ActionList.Item>
                    <ActionList.Item>Quote reply</ActionList.Item>
                    <ActionList.Divider />
                    <ActionList.Item>Edit</ActionList.Item>
                  </ActionList>
                </ActionMenu.Overlay>
              </ActionMenu>
            </Box>
          </Box>
        </PageLayout.Content>
        <PageLayout.Pane>
          <Box sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
            <Box>
              <Text sx={{fontSize: 0, fontWeight: 'bold', display: 'block', color: 'fg.muted'}}>Assignees</Text>
              <Text sx={{fontSize: 0, color: 'fg.muted', lineHeight: 'condensed'}}>No one – assign yourself</Text>
            </Box>
            <Box role="separator" sx={{width: '100%', height: 1, backgroundColor: 'border.default'}}></Box>
            <Box>
              <Text sx={{fontSize: 0, fontWeight: 'bold', display: 'block', color: 'fg.muted'}}>Labels</Text>
              <Text sx={{fontSize: 0, color: 'fg.muted', lineHeight: 'condensed'}}>None yet</Text>
            </Box>
          </Box>
        </PageLayout.Pane>
      </PageLayout>
    </>
  )
}

export function MemexTableMenu(): JSX.Element {
  return (
    <>
      <Box sx={{backgroundColor: 'canvas.inset', p: 4}}>
        <Heading as="h1" sx={{fontSize: 3, mb: 2}}>
          Primer teams backlog
        </Heading>
      </Box>

      <Box
        sx={{
          overflowX: 'auto',
          height: 400,
          background: 'repeating-linear-gradient(0deg, transparent, transparent 39px, #d0d7de 40px)'
        }}
      >
        <Box sx={{display: 'flex'}}>
          <TableHeader style={{width: 650}}>Title</TableHeader>
          <TableHeader>Assignees</TableHeader>
          <TableHeader>Status</TableHeader>
          <TableHeader>Labels</TableHeader>
          <TableHeader>Repository</TableHeader>
        </Box>
      </Box>
    </>
  )
}

const TableHeader: React.FC<{style?: Record<string, unknown>}> = props => {
  return (
    <Box
      sx={{
        minWidth: 200,
        minHeight: '40px',
        flexShrink: 0,
        display: 'flex',
        justifyContent: 'space-between',
        p: 2,
        border: '1px solid',
        borderColor: 'border.default',
        fontSize: 0,
        fontWeight: 'bold'
      }}
      {...props}
    >
      {props.children}
      <ActionMenu>
        <ActionMenu.Anchor>
          <IconButton
            icon={TriangleDownIcon}
            aria-label="Open column options menu"
            sx={{paddingX: '2px', paddingY: 0}}
          />
        </ActionMenu.Anchor>

        <ActionMenu.Overlay>
          <ActionList>
            <ActionList.Item>Sort ascending (123...)</ActionList.Item>
            <ActionList.Item>Sort descending (123...)</ActionList.Item>
            <ActionList.Divider />
            <ActionList.Item>Filter by values</ActionList.Item>
            <ActionList.Item>Group by values</ActionList.Item>
            <ActionList.Divider />
            <ActionList.Item variant="danger">Delete file</ActionList.Item>
          </ActionList>
        </ActionMenu.Overlay>
      </ActionMenu>
    </Box>
  )
}